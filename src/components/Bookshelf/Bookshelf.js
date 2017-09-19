import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class Bookshelf extends Component {
  static propTypes = {
    bookshelfTitle: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onBookShelfUpdate: PropTypes.func.isRequired
  };

  render() {
    return (
      <div className='bookshelf'>
        <h2 className='bookshelf-title'>{this.props.bookshelfTitle}</h2>
        <div className='bookshelf-books'>
          <ol className='books-grid'>
            {this.props.books.map(book => (
              <li key={book.id}>
                <Book book={book} onBookShelfUpdate={this.props.onBookShelfUpdate}/>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Bookshelf;