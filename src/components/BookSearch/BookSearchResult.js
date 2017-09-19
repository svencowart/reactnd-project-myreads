import React from 'react';
import PropTypes from 'prop-types';
import Book from '../Bookshelf/Book';

const BookSearchResult = (props) => (
  <div className='search-books-results'>
    <ol className='books-grid'>
      {props.books.map(book => (
        <li key={book.id}>
          <Book book={book}/>
        </li>
      ))}
    </ol>
  </div>
);

BookSearchResult.propTypes = {
  books: PropTypes.array.isRequired
};

export default BookSearchResult;