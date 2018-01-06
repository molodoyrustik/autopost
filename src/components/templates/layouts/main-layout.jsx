import React from 'react';

import Header from '../common/header';
import Footer from '../common/footer';

const MainLayout =  (props) => {
  return (
    <div>
      <div className='wrapper'>
          <Header />
          {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout;
