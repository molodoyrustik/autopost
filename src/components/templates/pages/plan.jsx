import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import PlanNavigation from '../sections/plan/plan-navigation';

class Plan extends Component {

  componentWillMount() {
    if(this.props.match.path === '/private/plan') {
      this.props.push('/private/plan/create-post')
    }
  }

  render() {
    return (
      <div className="plan">
        <PlanNavigation/>
        {renderRoutes(this.props.route.routes)}
      </div>
    )
  }
}

export default connect(null, { push })(Plan);
