import React from 'react';
import Footer from '../common/footer';

const LoginLayout = (props) => {
  return (
    <div>
      <div className='wrapper'>
          {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default (LoginLayout);
