import Book from '../../components/book/book';
import BooksCollection from '../../components/booksCollection/booksCollection';
import { connect } from 'react-redux';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Interesting from '../../components/interesting/interesting';
import Menu from '../../components/menu/menu';
import PropTypes from 'prop-types';
import React from 'react';
import './humor.less';

class Humor extends React.Component {
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

  HumorList() {
    return this.props.humorBooks.map((book) => {
      return (
        <Book key={book.id} name={book.nameBook} price={book.priceBook} img={book.imgBook} description={book.description} callBack={this.openCloseScreen} close={this.closeScreen}/>
      );
    });
  }

  InterestingList() {
    return this.props.interestingBooks.map((book) => {
      return (
        <Book key={book.id} name={book.nameBook} price={book.priceBook} img={book.imgBook} description={book.description} callBack={this.openCloseScreen} close={this.closeScreen}/>
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
        <Header menuClick={this.ClickMenu} getIn={this.getStateSignIn} getUp={this.getStateSignUp}/>
        <Menu stateMenu={this.state.menuFlag}/>
        <BooksCollection collectionName='Humor' collection={this.HumorList()}/>
        <Interesting interestingName={'Interesting'} collection={this.InterestingList()}/>
        <Footer />
      </div>
    );
  }
}

function bookStateToProps(state) {
  return {
    humorBooks: state.humorBooks,
    interestingBooks: state.interestingBooks
  };
}

export default connect(bookStateToProps)(Humor);

Humor.propTypes = {
  humorBooks: PropTypes.array.isRequired,
  interestingBooks: PropTypes.array.isRequired
};