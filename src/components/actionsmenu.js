import React, { Component } from "react";


export class ActionsMenu extends Component {

  render() {
    const { fromShelf, bookId, handleOnClick } = this.props;

    const isSameShelf = name => {
      return name === fromShelf;
    };

    return (
      <div className="book-shelf-changer">
        <select>
          <option value="move" disabled>
            Move to...
          </option>

          <option
            value="currentlyReading"
            disabled={isSameShelf("currentlyReading")}
            onClick={() => handleOnClick({
              fromShelf: fromShelf,
              toShelf: "currentlyReading",
              bookId: bookId
            })}
          >
            Currently Reading
          </option>
          <option
            value="wantToRead"
            disabled={isSameShelf("wantToRead")}
            onClick={() => handleOnClick({
              fromShelf: fromShelf,
              toShelf: "wantToRead",
              bookId: bookId
            })}
          >
            Want to Read
          </option>
          <option
            value="read"
            disabled={isSameShelf("read")}
            onClick={() => handleOnClick({
              fromShelf: fromShelf,
              toShelf: "read",
              bookId: bookId
            })}
          >
            Read
          </option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

