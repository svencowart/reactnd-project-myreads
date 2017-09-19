import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../../BooksAPI';
import BookListContent from './BookListContent';
import BookListToolbar from './BookListToolbar';

class BookList extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books }));
  }

  render() {
    return (
      <div className='list-books'>
        <BookListToolbar/>
        <BookListContent books={this.state.books} onBookShelfUpdate={this.updateBookShelves}/>
        <div className='open-search'>
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    );
  }

  updateBookShelves = () => {
    BooksAPI.getAll().then(books => this.setState({ books }));
  }
}

export default BookList;