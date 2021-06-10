import React, { Component } from "react";
import ShelfSelection from "./ShelfSelection";

export default class Shelf extends Component {
  categoryDisplay = (books) => {
    if (books === "read") {
      return "Read";
    }
    if (books === "wantToRead") {
      return "Want to read";
    }
    if (books === "currentlyReading") {
      return "Currently reading";
    }
  };
  render() {
    if (this.props.books.length <= 0) {
      return null;
    }
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">
          {this.categoryDisplay(this.props.books[0].shelf)}
        </h2>
        {this.props.books &&
          this.props.books.map((book) => {
            console.log(book);
            return (
              <div key={book.id}>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    <li className="book">
                      <div className="book-top">
                        <img
                          src={
                            book.imageLinks
                              ? book.imageLinks.smallThumbnail
                              : "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1055&q=80"
                          }
                          alt={book.title}
                          className="book-cover"
                        />
                        <ShelfSelection
                          book={book}
                          updateShelf={this.props.updateShelf}
                        />
                      </div>
                      <p className="book-title">{book.title}</p>
                      <p className="book-authors">{book.authors}</p>
                    </li>
                  </ol>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}
