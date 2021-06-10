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

  updateShelf = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    book.shelf = shelf;
    this.setState({
      books: this.state.books
        .filter((singleBook) => singleBook.id !== book.id)
        .concat(book),
    });
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
