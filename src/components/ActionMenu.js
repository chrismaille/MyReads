import React from "react";
import { camelCase } from "lodash";
import Action from "./Action";

const ActionMenu = props => {
  const { fromShelf, book, handleOnClick, data } = props;
  const { shelves } = data;

  const handleOnChange = event => {
    handleOnClick({
      fromShelf,
      toShelf: event.target.value,
      book
    });
  };

  return (
    <div className="book-shelf-changer">
      <select onChange={handleOnChange} value={book.shelf}>
        <option value="move" disabled>
          Move to...
        </option>
        {shelves.map(shelf => (
          <Action
            book={book}
            fromShelf={fromShelf}
            title={shelf.title}
            key={`${camelCase(shelf.title)}${book.id}`}
          />
        ))}
        {!book.shelf ? (
          <Action
            book={book}
            fromShelf="none"
            handleOnClick={handleOnClick}
            title="None"
          />
        ) : (
          <option value="none" disabled>
            None
          </option>
        )}
      </select>
    </div>
  );
};

export default ActionMenu;
