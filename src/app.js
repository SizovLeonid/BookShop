import Adventure from './pages/adventure/adventure';
import Business from './pages/business/business';
import Cart from './pages/cart/cart';
import Children from './pages/children/children';
import Detective from './pages/detective/detective';
import Fantasy from './pages/fantasy/fantasy';
import Home from './pages/home/home';
import Humor from './pages/Humor/humor';
import LoveStory from './pages/loveStory/loveStory';
import Poetry from './pages/poetry/poetry';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/detective' component={Detective}/>
          <Route path='/humor' component={Humor}/>
          <Route path='/fantasy' component={Fantasy}/>
          <Route path='/poetry' component={Poetry}/>
          <Route path='/loveStory' component={LoveStory}/>
          <Route path='/childrens' component={Children}/>
          <Route path='/business' component={Business}/>
          <Route path='/adventure' component={Adventure}/>
          <Route path='/cart' component={Cart}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
