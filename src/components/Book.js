import React, { PureComponent } from "react";
import ActionMenu from "./ActionMenu";
import { BookShelfConsumer } from "../App";

const camelCase = require("lodash/camelCase");

class Book extends PureComponent {
  render() {
    const { book } = this.props;
    const { title, authors, imageLinks, id, shelf } = book;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 192,
                backgroundImage: `url(${imageLinks &&
                  imageLinks.smallThumbnail})`
              }}
            />
            <BookShelfConsumer>
              {({ handleClick, data }) => (
                <ActionMenu
                  book={book}
                  fromShelf={shelf}
                  handleOnClick={handleClick}
                  data={data}
                />
              )}
            </BookShelfConsumer>
          </div>
          <div className="book-title">{title}</div>
          {authors &&
            authors.map(author => (
              <div key={camelCase(`${id}${author}`)} className="book-authors">
                {author}
              </div>
            ))}
        </div>
      </li>
    );
  }
}

export default Book;
