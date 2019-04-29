import { AddBook } from '../../actions/addBook';
import { bindActionCreators } from '../../../../../AppData/Local/Microsoft/TypeScript/3.4.3/node_modules/redux';
import Book from '../../components/book/book';
import BooksCollection from '../../components/booksCollection/booksCollection';
import { connect } from 'react-redux';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Interesting from '../../components/interesting/interesting';
import Menu from '../../components/menu/menu';
import PropTypes from 'prop-types';
import React from 'react';
import './poetry.less';

class Poetry extends React.Component {
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

  PoetryList() {
    return this.props.poetryBooks.map((book) => {
      return (
        <Book addToCart={() => this.props.addToCart(book)} key={book.id} name={book.nameBook} price={book.priceBook} img={book.imgBook} description={book.description} callBack={this.openCloseScreen} close={this.closeScreen}/>
      );
    });
  }

  InterestingList() {
    return this.props.interestingBooks.map((book) => {
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
        <Header menuClick={this.ClickMenu} getIn={this.getStateSignIn} getUp={this.getStateSignUp} countBook={this.props.cartBooks.length}/>
        <Menu stateMenu={this.state.menuFlag}/>
        <BooksCollection collectionName='Poetry' collection={this.PoetryList()}/>
        <Interesting interestingName={'Interesting'} collection={this.InterestingList()}/>
        <Footer />
      </div>
    );
  }
}

function bookStateToProps(state) {
  return {
    poetryBooks: state.poetryBooks,
    interestingBooks: state.interestingBooks,
    cartBooks: state.cartBooks
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ addToCart: AddBook }, dispatch);
}

export default connect(bookStateToProps, matchDispatchToProps)(Poetry);

Poetry.propTypes = {
  poetryBooks: PropTypes.array.isRequired,
  interestingBooks: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
  cartBooks: PropTypes.array.isRequired
};
