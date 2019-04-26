import PropTypes from 'prop-types';
import React from 'react';
import './booksCollection.less';

class BooksCollection extends React.Component {
  render() {
    return (
      <div id='booksCollection'>
        <div className='container'>
          <div className='booksCollection'>
            <h2>{this.props.collectionName}</h2>
            <div className='books'>{this.props.collection}</div>
          </div>
        </div>
      </div>
    );
  }
}


export default BooksCollection;

BooksCollection.propTypes = {
  collectionName: PropTypes.string.isRequired,
  collection: PropTypes.array.isRequired
};
