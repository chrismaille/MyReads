import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import SearchResult from "../components/SearchResult";
import Loading from "../components/Loading";
import * as BookAPI from "../BooksAPI";
import { findShelf } from "../Shelf";

class SearchPage extends Component {
  state = {
    loading: false,
    newSearch: "",
    oldSearch: "",
    searchList: []
  };

  /**
   * @description Make search input element a controlled component
   * @param event - DOM event for the element
   */
  updateTerm = event => {
    clearTimeout(this.timeout);
    const { value } = event.target;
    this.setState(oldState => ({
      newSearch: value,
      oldSearch: oldState.newSearch
    }));
    this.timeout = setTimeout(() => {
      this.checkTerm();
    }, 800);
  };

  /**
   * @description Check for new API request for /search
   */
  checkTerm = () => {
    const { newSearch, oldSearch } = this.state;
    if (newSearch !== oldSearch && newSearch.length > 2) {
      this.searchTerm();
    }
  };

  /**
   * @description Make the /search API request
   */
  searchTerm = () => {
    const { newSearch } = this.state;
    const { shelves } = this.props;
    this.setState({ loading: true }, () =>
      BookAPI.search(newSearch).then(data => {
        const books = data.map(book => {
          const updatedBook = book;
          const shelf = findShelf(book, shelves);
          if (shelf) {
            updatedBook.shelf = shelf;
          }
          return updatedBook;
        });
        this.setState({ loading: false, searchList: books });
      })
    );
  };

  render() {
    const { newSearch, loading, searchList } = this.state;
    return (
      <div className="search-books">
        <SearchBar
          value={newSearch}
          onChange={this.updateTerm}
          disabled={loading}
        />
        {loading ? <Loading /> : <SearchResult books={searchList} />}
      </div>
    );
  }
}

export default SearchPage;
