import React, { Component } from "react";
import * as PropTypes from "prop-types";
import { SearchBar } from "../components/searchbar";
import { SearchResults } from "../components/searchresults";

export class SearchPage extends Component {
  render() {
    return (
      <div className="search-books">
        <SearchBar onClick={this.props.onClick} />
        <SearchResults />
      </div>
    );
  }
}

SearchPage.propTypes = { onClick: PropTypes.func };
