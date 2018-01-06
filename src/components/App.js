import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Redirect, NavLink } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import history from '../history'

import Index from './templates/pages/index.jsx';
import Cabinet from './templates/pages/cabinet.jsx';
import Login from './templates/pages/login.jsx';
import Settings from './templates/pages/settings.jsx';
import NotFound from './routes/NotFound';

import './sass/main.scss';

class App extends Component {

    render() {
        return (
            <ConnectedRouter history = {history}>
              <div className="app">
                <Switch location={this.props.location}>
                  <Route path="/" exact component={Index}/>
                  <Route path="/cabinet" component={Cabinet}/>
                  <Route path="/login" component={Login}/>
                  <Route path="/settings" component={Settings}/>
                  <Route path="*" component={NotFound}/>
                </Switch>
              </div>
            </ConnectedRouter>
        )
    }

}

export default App
