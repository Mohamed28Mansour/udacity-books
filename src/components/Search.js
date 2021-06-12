import React, { Component } from "react";
import { Link } from "react-router-dom";
import ShelfSelection from "./ShelfSelection";
import * as BooksAPI from "../BooksAPI";
import { debounce } from "throttle-debounce";

export default class Search extends Component {
  state = {
    result: [],
  };

  searchList = debounce(500, async (query) => {
    let result;
    if (query.trim().length > 0) {
      result = await BooksAPI.search(query.trim());
      if (result.length > 0) {
        result = await Promise.all(
          result.map(async (singleBook) => {
            let updatedBook = await BooksAPI.get(singleBook.id);
            return updatedBook;
          })
        );
      }
    } else {
      result = [];
    }

    this.setState({ result });
  });

  render() {
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
              onChange={(event) => this.searchList(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid" />
          {this.state.result.length > 0 &&
            this.state.result.map((book) => {
              return (
                <div className="book" key={book.id}>
                  <div className="book-top">
                    <img
                      className="book-cover"
                      src={
                        book.imageLinks
                          ? book.imageLinks.smallThumbnail
                          : "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1055&q=80"
                      }
                      alt={book.title}
                    />
                    <ShelfSelection
                      book={book}
                      updateShelf={this.props.updateShelf}
                    />
                  </div>
                  <p className="book-title">{book.title}</p>
                  <p className="book-authors">{book.authors}</p>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
