import * as _ from "lodash";


export const getShelf = (state, key) => {
  return _.find(
    state.shelves,
    shelf => key === _.camelCase(shelf.title)
  );
};

export const getBook = (shelf, bookId) => {
  return _.find(shelf.books, book => book.id === bookId);
};

export const updateShelf = (
  state,
  fromShelf,
  currentShelf,
  toShelf,
  destinationShelf
) => {
  return state.shelves.map(shelf => {
    if (_.camelCase(shelf.title) === fromShelf) {
      return {
        title: shelf.title,
        books: currentShelf.books
      };
    } else if (_.camelCase(shelf.title) === toShelf) {
      return {
        title: shelf.title,
        books: destinationShelf.books
      };
    } else {
      return {
        title: shelf.title,
        books: shelf.books
      };
    }
  });
};
