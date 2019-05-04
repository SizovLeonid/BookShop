import { AddBook } from '../../actions/actions';
import { bindActionCreators } from '../../../../../AppData/Local/Microsoft/TypeScript/3.4.3/node_modules/redux';
import Book from '../../components/book/book';
import BooksCollection from '../../components/booksCollection/booksCollection';
import { connect } from 'react-redux';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import HomeSlider from '../../components/slider/slider';
import Interesting from '../../components/interesting/interesting';
import Menu from '../../components/menu/menu';
import PropTypes from 'prop-types';
import React from 'react';
import './home.less';

class Home extends React.Component {
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

  NewList() {
    return this.props.booksCollection.map((book) => {
      return (
        <Book addToCart={() => this.props.addToCart(book)} key={book.id} name={book.nameBook} price={book.priceBook} img={book.imgBook} description={book.description} callBack={this.openCloseScreen} close={this.closeScreen}/>
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
        <HomeSlider />
        <BooksCollection collectionName='News' collection={this.NewList()}/>
        <Interesting interestingName={'Interesting'} collection={this.InterestingList()}/>
        <Footer />
      </div>
    );
  }
}

function bookStateToProps(state) {
  return {
    interesting: state.books.interesting,
    cart: state.cart
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ addToCart: AddBook }, dispatch);
}

export default connect(bookStateToProps, matchDispatchToProps)(Home);

Home.propTypes = {
  interesting: PropTypes.array.isRequired,
  addToCart: PropTypes.func,
  cart: PropTypes.array.isRequired,
  booksCollection: PropTypes.array.isRequired
};
