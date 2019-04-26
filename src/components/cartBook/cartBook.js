import ModalBook from '../modal/modalBook/modalBook';
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

  closeModal = () => {
    this.setState({ modalFlag: false });
    this.props.close();
  }

  onClick1 = () => { this.clickModal(); this.props.callBack();}

  render() {
    return (
      <div>
        <div id='cartBook'>
          <div className='cartBook'>
            <img onClick={this.onClick1} src={this.props.img} />
            <h4>{this.props.name}</h4>
            <p>Автор книги</p>
            <div className='cart-button'>
              <div className='price-book'><span>{this.props.price}$</span></div>
              <a className='delete-book' href='#'><span>Delete</span></a>
            </div>
          </div>
        </div>
        <ModalBook stateModal={this.state.modalFlag} name={this.props.name} price={this.props.price} img={this.props.img} description={this.props.description} close={this.closeModal}/>
      </div>
    );
  }
}

export default CartBook;

CartBook.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  callBack: PropTypes.func,
  close: PropTypes.func
};
