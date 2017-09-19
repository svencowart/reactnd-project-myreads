import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Bookshelf from '../Bookshelf/Bookshelf';

class BookListContent extends Component {
  static propTypes = {
    books: PropTypes.array,
    onBookShelfUpdate: PropTypes.func.isRequired
  };

  render() {
    const { books, onBookShelfUpdate } = this.props;

    return (
      <div className='list-books-content'>
        <Bookshelf bookshelfTitle='Currently Reading' books={books.filter(book => book.shelf === 'currentlyReading')} onBookShelfUpdate={onBookShelfUpdate}/>
        <Bookshelf bookshelfTitle='Want to Read' books={books.filter(book => book.shelf === 'wantToRead')} onBookShelfUpdate={onBookShelfUpdate}/>
        <Bookshelf bookshelfTitle='Read' books={books.filter(book => book.shelf === 'read')} onBookShelfUpdate={onBookShelfUpdate}/>
      </div>
    );
  }
}

export default BookListContent;