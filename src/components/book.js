import React, { Component } from "react";
import { ActionsMenu } from "./actionsmenu";
import * as PropTypes from "prop-types";
import { BookShelfConsumer } from "../pages/books";

const camelCase = require("lodash/camelCase");

export class Book extends Component {
  render() {
    const { title, authors, imageLinks, id, shelf } = this.props.book;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 192,
                backgroundImage: `url(${imageLinks.smallThumbnail})`
              }}
            />
            <BookShelfConsumer>
              {({ handleClick }) => (
                <ActionsMenu
                  bookId={id}
                  fromShelf={shelf}
                  handleOnClick={handleClick}
                />
              )}
            </BookShelfConsumer>
          </div>
          <div className="book-title">{title}</div>
          {authors.map(author => (
            <div key={camelCase(`${id}${author}`)} className="book-authors">
              {author}
            </div>
          ))}
        </div>
      </li>
    );
  }
}

Book.propTypes = { book: PropTypes.any };
