import React, { Component } from "react";

export default class ShelfSelection extends Component {
  state = {
    shelves: [
      { name: "currently reading", category: "currentlyReading" },
      { name: "want to read", category: "wantToRead" },
      { name: "read", category: "read" },
      { name: "none", category: "none" },
    ],
  };
  render() {
    return (
      <div className="book-shelf-changer">
        <select
          value={this.props.shelf}
          onChange={(event) =>
            this.props.updateShelf(this.props.id, event.target.value)
          }
        >
          {this.state.shelves.map((shelf) => {
            return (
              <option value={shelf.category} key={shelf.category}>
                {shelf.name}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}
