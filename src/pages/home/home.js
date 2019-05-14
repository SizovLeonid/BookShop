import { homeActions as actions } from './homeActions';
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
    this.state = { interesting: [] };
  }

  state = {
    menuFlag: false,
    modalFlag: false,
    signIn: false,
    signUp: false
  }

  componentDidMount() {
    fetch('http://localhost:9090/api/books/get-interesting')
      .then(res => res.json())
      .then(json => this.setState({ interesting: json }));
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
    return this.state.interesting.map((book) => {
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

const stateToProps = state => ({
  books: state.books.newBooks,
  cart: state.cartBooks.cart
});

export default connect(stateToProps, actions)(Home);

Home.propTypes = {
  addToCart: PropTypes.func,
  cart: PropTypes.array.isRequired,
  getBooks: PropTypes.func.isRequired,
  booksCollection: PropTypes.array
};
