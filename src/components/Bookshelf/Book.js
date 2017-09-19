import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookshelfChanger from './BookshelfChanger';
import * as BooksAPI from '../../BooksAPI';

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onBookShelfUpdate: PropTypes.func
  };

  render() {
    const { book } = this.props;

    return (
      <div className='book'>
        <div className='book-top'>
          <div className='book-cover' style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks ? book.imageLinks.smallThumbnail : ''}` }}/>
          <BookshelfChanger shelf={book.shelf} onShelfChange={this.updateShelf}/>
        </div>
        <div className='book-title'>{book.title}</div>
        <div className='book-authors'>{book.authors ? book.authors.join(', ') : ''}</div>
      </div>
    );
  }

  updateShelf = (shelf) => {
    BooksAPI.update(this.props.book, shelf).then(() => {
      if (this.props.onBookShelfUpdate) {
        this.props.onBookShelfUpdate(this.props.books, shelf);
      }
    });
  }
}

export default Book;