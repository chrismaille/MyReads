import React, { Component } from "react";
import { ActionsMenu } from "./actionsmenu";
import * as PropTypes from "prop-types";

export class Book extends Component {
  render() {
    const { title, author, cover } = this.props.book;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: cover.coverWidth,
                height: cover.coverHeight,
                backgroundImage: `url(${cover.coverUrl})`
              }}
            />
            <ActionsMenu/>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{author}</div>
        </div>
      </li>
    );
  }
}

Book.propTypes = { book: PropTypes.any };
