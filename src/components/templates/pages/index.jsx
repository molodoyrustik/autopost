import React from 'react';

import MainLayout from '../layouts/main-layout.jsx';

import FirstRow from '../sections/index/first-row';
import Features from '../sections/index/features';
import Rates from '../sections/index/rates';
import Registration from '../sections/index/registration';

const Index = (props) => {
  return (
    <MainLayout>
      <div className="index">
        <FirstRow/>
        <Features/>
        <Rates/>
        <Registration/>
      </div>
    </MainLayout>
  )
}

export default Index;
