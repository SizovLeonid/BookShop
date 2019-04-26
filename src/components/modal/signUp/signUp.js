import PropTypes from 'prop-types';
import React from 'react';
import './signUp.less';

class SignUp extends React.Component {
  render() {
    return (
      <div className={`${this.props.clickUp ? 'signUpShow ' : 'signUpHide'}`}>
        <img onClick={this.props.close} className='close' src='../../../assets/modal/24.png' />
        <div className='name'>
          <div className='first-name'>
            <p>First Name</p>
            <input type='text'/>
          </div>
          <div className='last-name'>
            <p>Last Name</p>
            <input type='text' />
          </div>
        </div>
        <div className='email'>
          <p>Email</p>
          <input type='text' />
        </div>
        <hr />
        <div className='passwords'>
          <div className='password'>
            <p>Password</p>
            <input type='password' />
          </div>
          <div className='confirm-password'>
            <p>Confirm password</p>
            <input type='password' />
          </div>
        </div>
        <a href='#'>Sign Up</a>
      </div>
    );
  }
}

export default SignUp;

SignUp.propTypes = {
  clickUp: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired
};
