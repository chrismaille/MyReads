import React, { Component } from "react";
import * as PropTypes from "prop-types";
import Header from "../components/header";
import { SearchButton } from "../components/searchbutton";
import { getAll } from "../BooksAPI";
import { BookList } from "../components/booklist";

const camelCase = require("lodash/camelCase");

class BookShelf extends Component {
  state = { shelfs: [] };

  componentDidMount() {
    getAll().then(books =>
      this.setState({
        shelfs: [
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
    return (
      <div className="list-books-content">
        {this.state.shelfs.map(shelf => (
          <BookList
            key={camelCase(shelf.title)}
            title={shelf.title}
            books={shelf.books}
          />
        ))}
      </div>
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
