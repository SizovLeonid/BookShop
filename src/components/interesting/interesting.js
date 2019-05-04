import PropTypes from 'prop-types';
import React from 'react';
import './interesting.less';

class Interesting extends React.Component {
  render() {
    return (
      <div id='interesting'>
        <div className='container'>
          <div className='interesting'>
            <h2>{this.props.interestingName}</h2>
            <div className='books'>{this.props.collection}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Interesting;

Interesting.propTypes = {
  interestingName: PropTypes.string.isRequired,
  collection: PropTypes.array.isRequired
};
