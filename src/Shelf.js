import * as _ from "lodash";

export const getShelf = (state, key) =>
  _.find(state.shelves, shelf => key === _.camelCase(shelf.title));

// eslint-disable-next-line consistent-return
export const findShelf = (book, shelves) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const shelf of shelves) {
    if (_.find(shelf.books, bookInShelf => bookInShelf.id === book.id)) {
      return _.camelCase(shelf.title);
    }
  }
};

export const updateShelf = (
  state,
  fromShelf,
  currentShelf,
  toShelf,
  destinationShelf
) =>
  state.shelves.map(shelf => {
    if (_.camelCase(shelf.title) === fromShelf) {
      return {
        title: shelf.title,
        books: currentShelf.books
      };
    }
    if (_.camelCase(shelf.title) === toShelf) {
      return {
        title: shelf.title,
        books: destinationShelf.books
      };
    }
    return {
      title: shelf.title,
      books: shelf.books
    };
  });
