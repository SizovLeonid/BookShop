import PropTypes from 'prop-types';
import React from 'react';
import './menu.less';

class Menu extends React.Component {
  render() {
    return (
      <div id='menu'>
        <div className='container'>
          <div className='menu'>
            <ul className={`${this.props.stateMenu ? 'show' : 'hide'}`}>
              <a href='/detective'><li>Detective</li></a>
              <a href='/humor'><li>Humor</li></a>
              <a href='/fantasy'><li>Fantasy</li></a>
              <a href='/poetry'><li>Poetry</li></a>
              <a href='/loveStory'><li>Love story</li></a>
              <a href='/childrens'><li>Childrens literature</li></a>
              <a href='/business'><li>Business</li></a>
              <a href='/adventure'><li>Adventure</li></a>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;

Menu.propTypes = {
  stateMenu: PropTypes.bool
};
