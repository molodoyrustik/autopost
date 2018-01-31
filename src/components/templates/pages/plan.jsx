import React from 'react';
import { Route } from 'react-router-dom';

import MainLayout from '../layouts/main-layout.jsx';
import Navigation from '../common/navigation';
import Accounts from '../common/accounts';
import PlanNavigation from '../sections/plan/plan-navigation';
import PlanContent from '../sections/plan/plan-content';
import Calendar from '../sections/plan/plan-calendar';

const Plan = ({ match }) => {
  let tmpl = <Route component={PlanContent} />
  if(match.params.section === 'create-time') {
    tmpl = <Route component={PlanContent} />
  } else {
    tmpl = <Route component={Calendar} />
  }
  return (
    <MainLayout>
      <div className="plan">
        <div className="container">
          <div className="plan__left">
            <Navigation/>
            <PlanNavigation />

            {tmpl}
          </div>

          <div className="plan__right">
            <Accounts />
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Plan;
