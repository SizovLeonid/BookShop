import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import './cartBook.less';

class CartBook extends React.Component {
  constructor(props) {
    super(props);
    this.clickModal = this.clickModal.bind(this);
  }

  state= {
    modalFlag: false
  }

  clickModal() {
    this.setState({ modalFlag: true });
  }

  render() {
    return (
      <div id='cartBook'>
        <div className='cartBook'>
          <img src={this.props.img} />
          <h4>{this.props.name}</h4>
          <p>Автор книги</p>
          <div className='cart-button'>
            <div className='price-book'><span>{this.props.price}$</span></div>
            <a className='delete-book' onClick={this.props.removeToCart}><span>Delete</span></a>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.CartBooks
  };
}

export default connect(mapStateToProps)(CartBook);

CartBook.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  books: PropTypes.string,
  removeToCart: PropTypes.func
};
