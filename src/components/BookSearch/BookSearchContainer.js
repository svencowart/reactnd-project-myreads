import React, { Component } from 'react';
import BookSearchToolbar from './BookSearchToolbar';
import BookSearchResult from './BookSearchResult';

class BookSearchContainer extends Component {
  state = {
    books: []
  };

  render() {
    return (
      <div className='search-books'>
        <BookSearchToolbar onBookSearch={this.updateSearchResults}/>
        <BookSearchResult books={this.state.books}/>
      </div>
    );
  }

  updateSearchResults = (books) => {
    this.setState({ books });
  }
}

export default BookSearchContainer;