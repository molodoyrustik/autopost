import React from 'react';

import MainLayout from '../layouts/main-layout.jsx';
import Navigation from '../common/navigation';
import Accounts from '../common/accounts';
import CabinetPosts from '../sections/cabinet/cabinet-posts';

const Cabinet = (props) => {
  return (
    <MainLayout>
      <div className="cabinet">
        <div className="container">
          <div className="cabinet__left">
            <Navigation />
            <CabinetPosts />
          </div>

          <div className="cabinet__right">
            <Accounts />
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Cabinet;
