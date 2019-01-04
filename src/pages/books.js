import React, { Component } from "react";
import * as PropTypes from "prop-types";
import Header from "../components/header";
import { SearchButton } from "../components/searchbutton";
import { BookList } from "../components/booklist";
import { camelCase } from "lodash";
import { BookShelfConsumer } from "../App";

class BookShelf extends Component {
  render() {
    return (
      <BookShelfConsumer>
        {({ data }) => (
          <div className="list-books-content">
            {data.shelves.map(shelf => (
              <BookList
                key={camelCase(shelf.title)}
                title={shelf.title}
                books={shelf.books}
              />
            ))}
          </div>
        )}
      </BookShelfConsumer>
    );
  }
}

export class BooksPage extends Component {
  render() {
    return (
      <div className="list-books">
        <Header/>
        <BookShelf/>
        <SearchButton/>
      </div>
    );
  }
}

BooksPage.propTypes = { onClick: PropTypes.func };
