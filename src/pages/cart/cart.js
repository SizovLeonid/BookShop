import { bindActionCreators } from '../../../../../AppData/Local/Microsoft/TypeScript/3.4.3/node_modules/redux';
import Book from '../../components/book/book';
import BooksCollection from '../../components/booksCollection/booksCollection';
import CartBook from '../../components/cartBook/cartBook';
import { connect } from 'react-redux';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Interesting from '../../components/interesting/interesting';
import Menu from '../../components/menu/menu';
import PropTypes from 'prop-types';
import React from 'react';
import { AddBook, RemoveBook } from '../../actions/actions';
import './cart.less';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.ClickMenu = this.ClickMenu.bind(this);
    this.getStateSignIn = this.getStateSignIn.bind(this);
    this.getStateSignUp = this.getStateSignUp.bind(this);
  }

  state = {
    menuFlag: false,
    modalFlag: false,
    signIn: false,
    signUp: false
  }

  ClickMenu() {
    this.setState({ menuFlag: !this.state.menuFlag });
  }

  openCloseScreen = () => {
    this.setState({ modalFlag: true });
  }

  closeScreen = () => {
    this.setState({ modalFlag: false });
  }

  CartList() {
    return this.props.cart.map((book) => {
      return (
        <CartBook removeToCart={() => this.props.removeToCart(book)} key={book.id} name={book.nameBook} price={book.priceBook} img={book.imgBook} description={book.description} callBack={this.openCloseScreen} close={this.closeScreen}/>
      );
    });
  }

  InterestingList() {
    return this.props.interesting.map((book) => {
      return (
        <Book addToCart={() => this.props.addToCart(book)} key={book.id} name={book.nameBook} price={book.priceBook} img={book.imgBook} description={book.description} callBack={this.openCloseScreen} close={this.closeScreen}/>
      );
    });
  }

  getStateSignIn() {
    this.setState({ signIn: !this.state.signIn });
  }

  getStateSignUp() {
    this.setState({ signUp: !this.state.signUp });
  }

  render() {
    return (
      <div>
        <div className={`${this.state.menuFlag === true || this.state.modalFlag === true || this.state.signIn === true || this.state.signUp === true ? 'closeScreen' : ''}`}
          onClick={() => {this.setState({ menuFlag: false });}}/>
        <Header menuClick={this.ClickMenu} getIn={this.getStateSignIn} getUp={this.getStateSignUp} countBook={this.props.cart.length}/>
        <Menu stateMenu={this.state.menuFlag}/>
        <BooksCollection collectionName='Cart' collection={this.CartList()}/>
        <Interesting interestingName={'Interesting'} collection={this.InterestingList()}/>
        <Footer />
      </div>
    );
  }
}

function bookStateToProps(state) {
  return {
    cart: state.cart,
    interesting: state.books.interesting
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ addToCart: AddBook, removeToCart: RemoveBook }, dispatch);
}

export default connect(bookStateToProps, matchDispatchToProps)(Cart);

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  interesting: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeToCart: PropTypes.func.isRequired
};
