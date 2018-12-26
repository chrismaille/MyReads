import React, { Component } from "react";
import * as PropTypes from "prop-types";

export class SearchButton extends Component {
  render() {
    return (
      <div className="open-search">
        <button onClick={this.props.onClick}>Add a book</button>
      </div>
    );
  }
}

SearchButton.propTypes = { onClick: PropTypes.func };
