import * as _ from "lodash";

/**
 * Find Shelf
 * @param state - App State
 * @param key - slug for shelf
 * @returns {object} - Shelf
 */
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

/**
 * @description Recreates shelf array for setState
 * @param {object} state - Current State
 * @param {object} fromShelf - current shelf (optional)
 * @param {string} currentShelf - slug for current shelf (optional)
 * @param {string} toShelf - slug for destination shelf
 * @param {object} destinationShelf - destination shelf
 * @returns {any[]}
 */
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
