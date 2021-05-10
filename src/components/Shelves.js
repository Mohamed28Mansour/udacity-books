import React, { Component } from "react";
import { Link } from "react-router-dom";
import CurrentlyReading from "./CurrentlyReading";
import WantToRead from "./WantToRead";
import Read from "./Read";

export default class Shelves extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <CurrentlyReading
              books={this.props.books}
              updateShelf={this.props.updateShelf}
            />
            <WantToRead
              books={this.props.books}
              updateShelf={this.props.updateShelf}
            />
            <Read
              books={this.props.books}
              updateShelf={this.props.updateShelf}
            />
          </div>
        </div>
        <Link className="open-search" to="/search">
          <button>Add a book</button>
        </Link>
      </div>
    );
  }
}
