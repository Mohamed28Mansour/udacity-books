import React from "react";
import Shelves from "./components/Shelves";
import Search from "./components/Search";
import { Route, Switch } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  async componentDidMount() {
    const books = await BooksAPI.getAll();
    this.setState({ books });
  }

  updateShelf = (id, value) => {
    const selectedBook = this.state.books.find((book) => book.id === id);
    this.setState((state) => {
      const books = state.books.map((book) => {
        if (book.id === id) {
          return (book.shelf = value);
        } else {
          return book;
        }
      });
      return books;
    });
    BooksAPI.update(selectedBook, value);
  };

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Shelves books={this.state.books} updateShelf={this.updateShelf} />
          </Route>
          <Route exact path="/search">
            <Search books={this.state.books} updateShelf={this.updateShelf} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
