import React from 'react';
import { Link } from 'react-router-dom';

const Footer =  () => {
  return (
    <footer className='footer'>
      <div v className='container'>
        <div className='footer__logo'>
          <Link to='/'>
            <img src='/images/footer-logo.png' alt='' className='footer__logo-img'/>
          </Link>
        </div>
        <div className='footer__text'>
          <p>© 2014-2015 Onlypult. All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
