import React from 'react';

import MainLayout from '../layouts/main-layout.jsx';
import FaqHeader from '../sections/faq/faq-header.jsx';
import FaqSidebar from '../sections/faq/faq-sidebar.jsx';
import FaqContent from '../sections/faq/faq-content.jsx';

const Faq = (props) => {
  return (
    <MainLayout>
      <div className="faq">
        <div className="container">
          <div className="faq__wrapper">
            <FaqHeader/>
            <FaqSidebar/>
            <FaqContent/>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Faq;
