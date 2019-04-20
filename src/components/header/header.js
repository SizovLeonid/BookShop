import PropTypes from 'prop-types';
import React from 'react';
import './header.less';

class Header extends React.Component {
  render() {
    return (
      <div id='header'>
        <div className='container'>
          <div className='header'>
            <div className='header-logo'><a href='/'><h1>BookShop</h1></a></div>
            <div className='header-logo-low'><a href='/'><h1>BS</h1></a></div>
            <div className='header-navigation'>
              <a>Sizgn in</a>
              <a>Sign up</a>
              <a className='menu-btn' onClick={this.props.menuClick}><img src='../../assets/header/menu.png' /></a>
              <input type='text' />
              <a className='search-btn'></a>
              <a className='header-cart'><img src='../../assets/header/shopping-purse-icon.png' /><div className='orange-dot'><span>0</span></div></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Header;

Header.propTypes = {
  menuClick: PropTypes.func.isRequired
};
