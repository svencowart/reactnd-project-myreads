import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as BooksAPI from '../../BooksAPI';

class BookSearchToolbar extends Component {
  static propTypes = {
    onBookSearch: PropTypes.func.isRequired
  };

  state = {
    search: ''
  };

  render() {
    return (
      <div className='search-books-bar'>
        <Link to='/' className='close-search'>Close</Link>
        <div className='search-books-input-wrapper'>
          <input
            value={this.state.search}
            onChange={this.handleChange}
            type='text'
            placeholder='Search by title or author'
          />
        </div>
      </div>
    )
  }

  handleChange = (e) => {
    if (e.target.value) {
      this.setState({ search: e.target.value });
      BooksAPI.search(e.target.value).then((searchResults) => {
        if (searchResults && !searchResults.error) {
          BooksAPI.getAll().then(books => {
            // merges the current shelf states with the search results
            searchResults.forEach(searchBook => {
              let bookIndex = books.findIndex(book => book.id === searchBook.id);
              if (bookIndex > -1) {
                searchBook.shelf = books[bookIndex].shelf;
              } else {
                searchBook.shelf = 'none';
              }
            });

            this.props.onBookSearch(searchResults);
          });
        } else {
          this.props.onBookSearch([]);
        }
      });
    } else {
      this.setState({ search: e.target.value });
      this.props.onBookSearch([]);
    }
  }
}

export default BookSearchToolbar;