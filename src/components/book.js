import React, { Component } from "react";
import { ActionsMenu } from "./actionsmenu";
import * as PropTypes from "prop-types";

export class Book extends Component {
  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: this.props.book.cover.coverWidth,
                height: this.props.book.cover.coverHeight,
                backgroundImage: `url(${this.props.book.cover.coverUrl})`
              }}
            />
            <ActionsMenu/>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{this.props.book.author}</div>
        </div>
      </li>
    );
  }
}

Book.propTypes = { book: PropTypes.any };
