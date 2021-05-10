import React, { Component } from "react";
import ShelfSelection from "./ShelfSelection";

export default class Unread extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Unread</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li>
              {this.props.books
                .filter((book) => {
                  return book.shelf === "none";
                })
                .map((singleBook) => {
                  return (
                    <div className="book" key={singleBook.id}>
                      <div className="book-top">
                        <img
                          className="book-cover"
                          src={singleBook.imageLinks.smallThumbnail}
                          alt={singleBook.title}
                        />
                        <ShelfSelection
                          id={singleBook.id}
                          shelf={singleBook.shelf}
                          updateShelf={this.props.updateShelf}
                        />
                      </div>
                    </div>
                  );
                })}
            </li>
          </ol>
        </div>
      </div>
    );
  }
}
