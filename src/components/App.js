import React, { Component } from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { renderRoutes } from 'react-router-config';

import history from '../history'

import routes from './routes.js';

import './sass/main.scss';


class App extends Component {

    render() {
        return (
            <ConnectedRouter history = {history}>
              <div className="app">
                {renderRoutes(routes)}
              </div>
            </ConnectedRouter>
        )
    }

}

export default App
