import PropTypes from 'prop-types';
import React from 'react';
import './slide.less';


class Slide extends React.Component {
  render() {
    return (
      <div id='slide'>
        <div className='slide'>
          <img src={this.props.img}></img>
          <div className='slide-text'>
            <h3>{this.props.slideName}</h3>
            <p>{this.props.slideDescription}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Slide;

Slide.propTypes = {
  slideName: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  slideDescription: PropTypes.string.isRequired
};
