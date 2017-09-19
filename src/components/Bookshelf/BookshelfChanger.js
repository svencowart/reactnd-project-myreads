import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookListContent extends Component {
  static propTypes = {
    shelf: PropTypes.string,
    onShelfChange: PropTypes.func
  };

  state = {
    selectedShelf: ''
  };

  componentDidMount() {
    this.setState({ selectedShelf: this.props.shelf });
  }

  render () {
    return (
      <div className='book-shelf-changer'>
        <select value={this.state.selectedShelf} onChange={this.handleChange}>
          <option value='none' disabled>Move to...</option>
          <option value='currentlyReading'>Currently Reading</option>
          <option value='wantToRead'>Want to Read</option>
          <option value='read'>Read</option>
          <option value='none'>None</option>
        </select>
      </div>
    );
  }

  handleChange = (e) => {
    this.setState({ selectedShelf: e.target.value });
    if (this.props.onShelfChange) {
      this.props.onShelfChange(e.target.value);
    }
  }
}

export default BookListContent;