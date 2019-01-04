import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { SearchPage } from "./pages/search";
import { BooksPage } from "./pages/books";
import { Route } from "react-router-dom";
import Loading from "./components/loading";
import { getBook, getShelf, updateShelf } from "./Shelf";

const Context = React.createContext({});

export const BookShelfProvider = Context.Provider;
export const BookShelfConsumer = Context.Consumer;

class BooksApp extends React.Component {
  state = { shelves: [], loading: true };

  moveToAnotherShelf = ({ bookId, fromShelf, toShelf }) => {
    // Find current shelves
    const currentShelf = getShelf(this.state, fromShelf);
    const destinationShelf = getShelf(this.state, toShelf);

    // Find current book
    const currentBook = getBook(currentShelf, bookId);

    if (!currentBook || !destinationShelf) {
      throw new Error("Invalid data");
    }
    // Update both shelves (move book on one to another)
    currentShelf.books = currentShelf.books.filter(book => book.id !== bookId);
    destinationShelf.books.push(currentBook);
    currentBook.shelf = toShelf;

    // Recreate shelves array
    const updatedShelves = updateShelf(
      this.state,
      fromShelf,
      currentShelf,
      toShelf,
      destinationShelf
    );

    // Update state
    BooksAPI.update(currentBook, toShelf)
      .then(() => {
        this.setState({ shelves: updatedShelves });
      })
      .catch(error => {
        throw new Error(`Invalid response from API: ${error}.`);
      });
  };

  componentDidMount() {
    BooksAPI.getAll().then(books =>
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
      <div className="app">
        <BookShelfProvider value={contextValue}>
          {this.state.loading ? (
            <Loading/>
          ) : (
            <Route exact path={"/"} component={BooksPage}/>
          )}
          <Route path={"/search"} component={SearchPage}/>
        </BookShelfProvider>
      </div>
    );
  }
}

export default BooksApp;
