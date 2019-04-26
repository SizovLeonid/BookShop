import PropTypes from 'prop-types';
import React from 'react';
import SignIn from '../modal/signIn/signIn';
import SignUp from '../modal/signUp/signUp';
import './header.less';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.signIn = this.signIn.bind(this);
    this.signUp = this.signUp.bind(this);
  }

  state = {
    signIn: false,
    signUp: false
  }

  signIn() {
    this.setState({ signIn: !this.state.signIn });
    this.props.getIn();
  }

  signUp() {
    this.setState({ signUp: !this.state.signUp });
    this.props.getUp();
  }

  render() {
    return (
      <div id='header'>
        <div className='container'>
          <div className='header'>
            <div className='header-logo'><a href='/'><h1>BookShop</h1></a></div>
            <div className='header-logo-low'><a href='/'><h1>BS</h1></a></div>
            <div className='header-navigation'>
              <a onClick={this.signIn}>Sizgn in</a>
              <a onClick={this.signUp}>Sign up</a>
              <a className='menu-btn' onClick={this.props.menuClick}><img src='../../assets/header/menu.png' /></a>
              <input type='text' />
              <a className='search-btn'></a>
              <a className='header-cart' href='/cart'><img src='../../assets/header/shopping-purse-icon.png' /><div className='orange-dot'><span>0</span></div></a>
            </div>
          </div>
        </div>
        <SignIn clickIn={this.state.signIn} close={this.signIn}/>
        <SignUp clickUp={this.state.signUp} close={this.signUp}/>
      </div>
    );
  }
}


export default Header;

Header.propTypes = {
  menuClick: PropTypes.func.isRequired,
  getIn: PropTypes.func.isRequired,
  getUp: PropTypes.func.isRequired
};
