import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import { SearchPage } from "./pages/search";
import { BooksPage } from "./pages/books";
import { Route } from "react-router-dom";

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path={"/"} component={BooksPage}/>
        <Route path={"/search"} component={SearchPage}/>
      </div>
    );
  }
}

export default BooksApp;
