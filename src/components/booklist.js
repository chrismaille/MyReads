import React, { Component } from "react";
import { Book } from "./book";
import * as PropTypes from "prop-types";

export class BookList extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map(book => (
              <Book key={book.id} book={book}/>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

BookList.propTypes = {
  title: PropTypes.string,
  books: PropTypes.any
};
