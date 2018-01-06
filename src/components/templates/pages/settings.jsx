import React from 'react';

import MainLayout from '../layouts/main-layout.jsx';
import Navigation from '../common/navigation';
import Accounts from '../common/accounts';
import SettingsBox from '../sections/settings/settings-box';

const Settings = (props) => {
  return (
    <MainLayout>
      <div className="settings">
        <div className="container">
          <div className="settings__left">
            <Navigation />
            <SettingsBox />
          </div>

          <div className="settings__right">
            <Accounts />
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Settings;
