import BooksGenre from './pages/booksGenre/booksGenre';
import Cart from './pages/cart/cart';
import { connect } from 'react-redux';
import Home from './pages/home/home';
import PropTypes from 'prop-types';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:9090/api/books/get-books')
      .then(res => res.json())
      .then(json => this.setState({ books: json }));
  }

  news() {
    const result = this.state.books.filter(book => book.genre.trim() === 'news');
    return result;
  }

  detective() {
    const result = this.state.books.filter(book => book.genre.trim() === 'detective');
    return result;
  }

  humor() {
    const result = this.state.books.filter(book => book.genre.trim() === 'humor');
    return result;
  }

  fantasy() {
    const result = this.state.books.filter(book => book.genre.trim() === 'fantasy');
    return result;
  }

  poetry() {
    const result = this.state.books.filter(book => book.genre.trim() === 'poetry');
    return result;
  }

  loveStory() {
    const result = this.state.books.filter(book => book.genre.trim() === 'loveStory');
    return result;
  }

  children() {
    const result = this.state.books.filter(book => book.genre.trim() === 'children');
    return result;
  }

  business() {
    const result = this.state.books.filter(book => book.genre.trim() === 'business');
    return result;
  }

  adventure() {
    const result = this.state.books.filter(book => book.genre.trim() === 'adventure');
    return result;
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={() => <Home booksCollection={this.news()}/>}/>
          <Route path='/detective' component={() => <BooksGenre collectionName='Detective' booksCollection={this.detective()}/>}/>
          <Route path='/humor' component={() => <BooksGenre collectionName='Humor' booksCollection={this.humor()}/>}/>
          <Route path='/fantasy' component={() => <BooksGenre collectionName='Fantasy' booksCollection={this.fantasy()}/>}/>
          <Route path='/poetry' component={() => <BooksGenre collectionName='Poetry' booksCollection={this.poetry()}/>}/>
          <Route path='/loveStory' component={() => <BooksGenre collectionName='Love Story' booksCollection={this.loveStory()}/>}/>
          <Route path='/childrens' component={() => <BooksGenre collectionName='Childrens literature' booksCollection={this.children()}/>}/>
          <Route path='/business' component={() => <BooksGenre collectionName='Business' booksCollection={this.business()}/>}/>
          <Route path='/adventure' component={() => <BooksGenre collectionName='Adventure' booksCollection={this.adventure()} />}/>
          <Route path='/cart' component={Cart}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

function bookStateToProps(state) {
  return {
    books: state.books,
    cart: state.books.cart,
    genreBooks: state.genreBooks
  };
}

export default connect(bookStateToProps)(App);

App.propTypes = {
  books: PropTypes.object,
  genreBooks: PropTypes.object
};
