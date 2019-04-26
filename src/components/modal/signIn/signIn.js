import PropTypes from 'prop-types';
import React from 'react';
import './signIn.less';

class SignIn extends React.Component {
  render() {
    return (
      <div className={`${this.props.clickIn ? 'signInShow ' : 'signInHide'}`}>
        <img onClick={this.props.close} className='close' src='../../../assets/modal/24.png' />
        <p>Email</p>
        <input type='email' />
        <p>Password</p>
        <input type='password'/>
        <a className='button-singIn' href='http://google.com/'>Sing in</a>
      </div>
    );
  }
}

export default SignIn;

SignIn.propTypes = {
  clickIn: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired
};
