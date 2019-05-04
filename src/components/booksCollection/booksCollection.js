import PropTypes from 'prop-types';
import React from 'react';
import './booksCollection.less';


class BooksCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 100, input: '' };
    this.handleChange = this.handleChange.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  onChange(event) {
    this.setState({ input: event.target.value });
  }

  findBook(arr) {
    if (this.state.input === '' && this.state.value === 100) {
      return this.props.collection;
    } return arr.filter(book => book.props.name.search(this.state.input) !== -1 && book.props.price <= this.state.value);
  }

  render() {
    return (
      <div id='booksCollection'>
        <div className='container'>
          <div className='booksCollection'>
            <h2>{this.props.collectionName}</h2>
            <div className='filter'>
              <div className='title'>
                <p>Title</p>
                <input type='text' onChange={this.onChange} />
              </div>
              <div className='price'>
                <p>Price</p>
                <input onChange={this.handleChange} type="range" min="0" max="100" step="1" />
                <div className='price-text'><span>{this.state.value}$</span></div>
              </div>
            </div>
            <div className='books'>{this.findBook(this.props.collection)}</div>
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
