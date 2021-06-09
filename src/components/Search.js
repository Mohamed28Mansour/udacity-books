import React, { Component } from "react";
import { Link } from "react-router-dom";
import ShelfSelection from "./ShelfSelection";
import * as BooksAPI from "../BooksAPI";

export default class Search extends Component {
  state = {
    query: "",
    result: [],
  };

  searchList = async (query) => {
    this.setState({ query: query.trim() });
    let result;
    if (query.length > 0) {
      result = await BooksAPI.search(query);
    } else {
      result = [];
    }
    this.setState({ result });
  };

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
              value={this.state.query}
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
