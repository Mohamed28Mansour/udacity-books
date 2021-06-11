import React, { Component } from "react";
import { Link } from "react-router-dom";
import Shelf from "./Shelf";

export default class Shelves extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Shelf
            books={this.props.books.filter((book) => {
              return book.shelf === "currentlyReading";
            })}
            updateShelf={this.props.updateShelf}
          />
          <Shelf
            books={this.props.books.filter((book) => {
              return book.shelf === "read";
            })}
            updateShelf={this.props.updateShelf}
          />
          <Shelf
            books={this.props.books.filter((book) => {
              return book.shelf === "wantToRead";
            })}
            updateShelf={this.props.updateShelf}
          />
        </div>
        <Link className="open-search" to="/search">
          <button>Add a book</button>
        </Link>
      </div>
    );
  }
}
