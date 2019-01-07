import React from "react";
import { Route } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import SearchPage from "./pages/Search";
import { BooksPage } from "./pages/Books";
import Loading from "./components/Loading";
import { getShelf, updateShelf } from "./Shelf";
import "react-toastify/dist/ReactToastify.css";
import ToastMsg from "./components/Toast";

const Context = React.createContext({});

export const BookShelfProvider = Context.Provider;
export const BookShelfConsumer = Context.Consumer;

class BooksApp extends React.Component {
  state = { shelves: [], loading: true };

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

  notify = data => toast(<ToastMsg data={data} />);

  /**
   * @description Main App logic
   * @param {object} book - Object representing the Book
   * @param {string} fromShelf - slug representing Book's current Shelf (optional)
   * @param {string} toShelf - slug representing destination Shelf
   */
  moveToAnotherShelf = ({ book, fromShelf, toShelf }) => {
    // Find current shelves
    const currentShelf = fromShelf ? getShelf(this.state, fromShelf) : null;
    const destinationShelf = getShelf(this.state, toShelf);

    // Update both shelves (move book on one to another)
    if (currentShelf) {
      currentShelf.books = currentShelf.books.filter(
        bookInShelf => bookInShelf.id !== book.id
      );
    }
    destinationShelf.books.push(book);
    const updatedBook = book;
    updatedBook.shelf = toShelf;

    // Recreate shelves array
    const updatedShelves = updateShelf(
      this.state,
      fromShelf,
      currentShelf,
      toShelf,
      destinationShelf
    );

    // Update state
    BooksAPI.update(updatedBook, toShelf)
      .then(() => {
        this.setState({ shelves: updatedShelves }, () =>
          this.notify({ updatedBook, shelf: destinationShelf })
        );
      })
      .catch(error => {
        throw new Error(`Invalid response from API: ${error}.`);
      });
  };

  render() {
    const contextValue = {
      data: this.state,
      handleClick: this.moveToAnotherShelf
    };
    const { loading, shelves } = this.state;
    return (
      <div className="app">
        <ToastContainer />
        <BookShelfProvider value={contextValue}>
          {loading ? (
            <Loading />
          ) : (
            <Route exact path="/" component={BooksPage} />
          )}
          <Route
            path="/search"
            render={() => <SearchPage shelves={shelves} />}
          />
        </BookShelfProvider>
      </div>
    );
  }
}

export default BooksApp;
