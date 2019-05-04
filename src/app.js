import BooksGenre from './pages/booksGenre/booksGenre';
import Cart from './pages/cart/cart';
import { connect } from 'react-redux';
import Home from './pages/home/home';
import PropTypes from 'prop-types';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={() => <Home booksCollection={this.props.books.new}/>}/>
          <Route path='/detective' component={() => <BooksGenre collectionName='Detective' booksCollection={this.props.books.detective}/>}/>
          <Route path='/humor' component={() => <BooksGenre collectionName='Humor' booksCollection={this.props.books.humor}/>}/>
          <Route path='/fantasy' component={() => <BooksGenre collectionName='Fantasy' booksCollection={this.props.books.fantasy}/>}/>
          <Route path='/poetry' component={() => <BooksGenre collectionName='Poetry' booksCollection={this.props.books.poetry}/>}/>
          <Route path='/loveStory' component={() => <BooksGenre collectionName='Love Story' booksCollection={this.props.books.loveStory}/>}/>
          <Route path='/childrens' component={() => <BooksGenre collectionName='Childrens literature' booksCollection={this.props.books.children}/>}/>
          <Route path='/business' component={() => <BooksGenre collectionName='Business' booksCollection={this.props.books.business}/>}/>
          <Route path='/adventure' component={() => <BooksGenre collectionName='Adventure' booksCollection={this.props.books.adventure}/>}/>
          <Route path='/cart' component={Cart}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

function bookStateToProps(state) {
  return {
    books: state.books
  };
}

export default connect(bookStateToProps)(App);

App.propTypes = {
  books: PropTypes.object
};
