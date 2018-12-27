import React, { Component } from "react";
import * as PropTypes from "prop-types";
import { Link } from "react-router-dom";

export class SearchButton extends Component {
  render() {
    return (
      <Link className="open-search" to={"/search"}>
        Add a book
      </Link>
    );
  }
}

SearchButton.propTypes = { onClick: PropTypes.func };
