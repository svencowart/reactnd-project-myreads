import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import BookListContainer from './components/BookList/BookListContainer';
import BookSearchContainer from './components/BookSearch/BookSearchContainer';

const BooksApp = () => (
  <div className='app'>
    <Route exact path='/' component={BookListContainer}/>
    <Route exact path='/search' component={BookSearchContainer}/>
  </div>
);

export default BooksApp;
