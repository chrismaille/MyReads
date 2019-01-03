import React, { Component } from "react";
import * as PropTypes from "prop-types";
import Header from "../components/header";
import { SearchButton } from "../components/searchbutton";
import { getAll, update } from "../BooksAPI";
import { BookList } from "../components/booklist";
import Loading from "../components/loading";

const _ = require("lodash");

const Context = React.createContext({});

export const BookShelfProvider = Context.Provider;
export const BookShelfConsumer = Context.Consumer;

class BookShelf extends Component {
  state = { shelves: [], loading: true };

  moveToAnotherShelf = ({ bookId, fromShelf, toShelf }) => {
    // Find current shelves
    const currentShelf = _.find(
      this.state.shelves,
      shelf => fromShelf === _.camelCase(shelf.title)
    );
    const destinationShelf = _.find(
      this.state.shelves,
      shelf => toShelf === _.camelCase(shelf.title)
    );

    // Find current book
    const currentBook = _.find(currentShelf.books, book => book.id === bookId);

    // Update both shelves (move book on one to another)
    currentShelf.books = currentShelf.books.filter(book => book.id !== bookId);
    destinationShelf.books.push(currentBook);
    currentBook.shelf = toShelf;

    // Recreate shelves array
    const updatedShelves = this.state.shelves.map(shelf => {
      if (_.camelCase(shelf.title) === fromShelf) {
        return {
          title: shelf.title,
          books: currentShelf.books
        };
      } else if (_.camelCase(shelf.title) === toShelf) {
        return {
          title: shelf.title,
          books: destinationShelf.books
        };
      } else {
        return {
          title: shelf.title,
          books: shelf.books
        };
      }
    });
    // Update state
    update(currentBook, toShelf).then(() => {
      this.setState({ shelves: updatedShelves });
    });
  };

  componentDidMount() {
    getAll().then(books =>
      this.setState({
        loading: false,
        shelves: [
          {
            title: "Currently Reading",
            books: books.filter(book => book.shelf === "currentlyReading")
          },
          {
            title: "Want to Read",
            books: books.filter(book => book.shelf === "wantToRead")
          },
          {
            title: "Read",
            books: books.filter(book => book.shelf === "read")
          }
        ]
      })
    );
  }

  render() {
    const contextValue = {
      data: this.state,
      handleClick: this.moveToAnotherShelf
    };
    return (
      <>
        {this.state.loading ? (
          <Loading/>
        ) : (
          <div className="list-books-content">
            <BookShelfProvider value={contextValue}>
              {this.state.shelves.map(shelf => (
                <BookList
                  key={_.camelCase(shelf.title)}
                  title={shelf.title}
                  books={shelf.books}
                />
              ))}
            </BookShelfProvider>
          </div>
        )}
      </>
    );
  }
}

export class BooksPage extends Component {
  render() {
    return (
      <div className="list-books">
        <Header />
        <BookShelf />
        <SearchButton/>
      </div>
    );
  }
}

BooksPage.propTypes = { onClick: PropTypes.func };
