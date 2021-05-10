import React, { Component } from "react";
import { Link } from "react-router-dom";
import ShelfSelection from "./ShelfSelection";

export default class Search extends Component {
  state = {
    query: "",
  };

  searchList = (query) => {
    this.setState({ query: query.trim() });
  };

  render() {
    const displayedBooks =
      this.state.query === ""
        ? this.props.books
        : this.props.books.filter((book) => {
            console.log(book);
            const author = book.authors
              .join()
              .toLowerCase()
              .includes(this.state.query.toLowerCase());
            const title = book.title
              .toLowerCase()
              .includes(this.state.query.toLowerCase());
            return author || title;
          });

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Back</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.searchList(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid" />
          {displayedBooks.map((book) => {
            return (
              <div className="book" key={book.id}>
                <div className="book-top">
                  <img
                    className="book-cover"
                    src={book.imageLinks.smallThumbnail}
                    alt={book.title}
                  />
                  <ShelfSelection
                    id={book.id}
                    shelf={book.shelf}
                    updateShelf={this.props.updateShelf}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
