import React, { Component } from "react";
import * as PropTypes from "prop-types";
import Header from "../components/header";
import { SearchButton } from "../components/searchbutton";
import { CurrentlyReading } from "../containers/currentreading";
import { WantToRead } from "../containers/wanttoread";
import { Read } from "../containers/read";

class BookShelf extends Component {
  render() {
    return (
      <div className="list-books-content">
        <div>
          <CurrentlyReading />
          <WantToRead />
          <Read />
        </div>
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
