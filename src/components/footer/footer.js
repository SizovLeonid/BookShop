import React from 'react';
import './footer.less';

class Footer extends React.Component {
  render() {
    return (
      <div id='footer'>
        <div className='container'>
          <div className='footer'>
            <h2>Contact us</h2>
            <div className='contact-content'>
              <div className='contact-form'>
                <p><strong>Send a message</strong></p>
                <div className='email'>
                  <p>Your email</p>
                  <input type='email' />
                </div>
                <div className='message'>
                  <p>Enter your message</p>
                  <textarea />
                </div>
                <a className='send'><div>Send</div></a>
              </div>
              <div className='links'>
                <ul className='contact-links'>
                  <li className='twitter'><img src='../../assets/contact/twitter.png' /><a href='#'>www.twitter.com/sizov</a></li>
                  <li className='instagram'><img src='../../assets/contact/instagrm.png' /><a href='#'>www.instagram.com/sizov</a></li>
                  <li className='facebook'><img src='../../assets/contact/facebook.png' /><a href='#'>www.facebook.com/sizov</a></li>
                  <li className='gmail'><img src='../../assets/contact/gmail.png' /><a href='#'>sizov@gmail.com</a></li>
                  <li className='youtube'><img src='../../assets/contact/youtube.png' /><a href='#'>www.youtube.com/sizov</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
