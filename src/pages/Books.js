import React from "react";
import { camelCase } from "lodash";
import Header from "../components/Header";
import SearchButton from "../components/SearchButton";
import BookList from "../components/BookList";
import { BookShelfConsumer } from "../App";

export const BookShelf = () => (
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

export const BooksPage = () => (
  <div className="list-books">
    <Header />
    <BookShelf />
    <SearchButton />
  </div>
);
