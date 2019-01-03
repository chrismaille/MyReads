import React, { Component } from "react";
import { camelCase } from "lodash";
import { Action } from "./action";

export class ActionsMenu extends Component {
  render() {
    const { fromShelf, bookId, handleOnClick } = this.props;
    const { shelves } = this.props.data;

    return (
      <div className="book-shelf-changer">
        <select>
          <option value="move" disabled>
            Move to...
          </option>
          {shelves.map(shelf => (
            <Action
              bookId={bookId}
              fromShelf={fromShelf}
              handleOnClick={handleOnClick}
              title={shelf.title}
              key={`${camelCase(shelf.title)}${bookId}`}
            />
          ))}
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}
