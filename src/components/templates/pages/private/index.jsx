import React, { Component } from 'react';
import { connect } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { push } from 'react-router-redux';

import MainLayout from '../../layouts/main-layout.jsx';
import Navigation from '../../common/navigation';
import Accounts from '../../common/accounts';


class Private extends Component {
  componentWillMount() {
    if(this.props.match.path === '/private') {
      this.props.push('/private/cabinet')
    }
  }

  render() {
    return (
      <MainLayout>
        <div className="private">
          <div className="container">
            <div className="private__left">
              <Navigation />
              <div className="private__content">
                {renderRoutes(this.props.route.routes)}
              </div>
            </div>

            <div className="private__right">
              <Accounts />
            </div>
          </div>
        </div>
      </MainLayout>
    )
  }
}

export default connect(null, { push })(Private);
