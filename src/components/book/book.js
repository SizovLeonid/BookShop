import { connect } from 'react-redux';
import ModalBook from '../modal/modalBook/modalBook';
import PropTypes from 'prop-types';
import React from 'react';
import './book.less';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.clickModal = this.clickModal.bind(this);
  }

  state= {
    modalFlag: false,
  }

  clickModal() {
    this.setState({ modalFlag: true });
  }

  closeModal = () => {
    this.setState({ modalFlag: false });
    this.props.close();
  }

  onClick1 = () => { this.clickModal(); this.props.callBack();}

  render() {
    return (
      <div>
        <div id='book'>
          <div className='book'>
            <img src={this.props.img} onClick={this.onClick1}/>
            <div className='description'>
              <h4>{this.props.name}</h4>
              <p>{this.props.price}$</p>
              <div className='btn'>
                <a onClick={this.props.addToCart} className='button-add'><div>Add</div></a>
                <a className='button-buy'><div>Buy</div></a>
              </div>
            </div>
          </div>
        </div>
        <ModalBook addToCart={this.props.addToCart} stateModal={this.state.modalFlag} name={this.props.name} price={this.props.price} img={this.props.img} description={this.props.description} close={this.closeModal}/>
      </div>
    );
  }
}

function bookStateToProps(state) {
  return {
    cartBooks: state.cartBooks
  };
}

export default connect(bookStateToProps)(Book);

Book.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  callBack: PropTypes.func,
  close: PropTypes.func,
  addToCart: PropTypes.func
};
