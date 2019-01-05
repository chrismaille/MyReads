import React from "react";
import Book from "./Book";

const SearchResult = props => {
  const { books } = props;

  return (
    <div className="search-books-results">
      {books.length > 0 && (
        <ol className="books-grid">
          {books.map(book => (
            <Book key={book.id} book={book} />
          ))}
        </ol>
      )}
    </div>
  );
};

export default SearchResult;
