import PropTyps from 'prop-types';
import React from 'react';
import './modalBook.less';

class ModalBook extends React.Component {
  render() {
    return (
      <div id={`${this.props.stateModal ? 'modalBookShow' : 'modalBook'}`}>
        <div className='modalBook'>
          <img src={this.props.img} />
          <div className='description'>
            <h4>{this.props.name}</h4>
            <p className='autor'>Sizov Leonid</p>
            <p className='description-text'>{this.props.description}</p>
          </div>
          <a onClick={this.props.close}><img className='icon-close' src='../../../assets/modal/24.png' /></a>
        </div>
        <div className='buttons'>
          <a className='btn-buy' ><p>Buy for {this.props.price}$</p></a>
          <a onClick={() => { this.props.addToCart(); this.props.close();}} className='btn-add' ><p>Add to Cart</p></a>
        </div>
      </div>
    );
  }
}

export default ModalBook;

ModalBook.propTypes = {
  stateModal: PropTyps.bool.isRequired,
  name: PropTyps.string.isRequired,
  price: PropTyps.number.isRequired,
  img: PropTyps.string.isRequired,
  description: PropTyps.string.isRequired,
  close: PropTyps.func.isRequired,
  addToCart: PropTyps.func
};
