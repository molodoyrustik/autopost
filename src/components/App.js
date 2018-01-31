import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import history from '../history'

import Index from './templates/pages/index.jsx';
import Cabinet from './templates/pages/cabinet.jsx';
import Login from './templates/pages/login.jsx';
import Settings from './templates/pages/settings.jsx';
import Faq from './templates/pages/faq.jsx';
import Plan from './templates/pages/plan.jsx';
import NotFound from './routes/NotFound';

import AuthHoc from './HOC/authHoc';

import './sass/main.scss';

class App extends Component {

    render() {
        return (
            <ConnectedRouter history = {history}>
              <div className="app">
                <Switch location={this.props.location}>
                  <Route path="/" exact component={Index}/>
                  <Route path="/cabinet" component={AuthHoc(Cabinet)}/>
                  <Route path="/login" component={Login}/>
                  <Route path="/settings" component={AuthHoc(Settings)}/>
                  <Route path="/faq" component={Faq}/>
                  <Route path="/plan" exact render={({match}) =>(
                    <Redirect to='/plan/create-time' />
                  )}/>
                  <Route path="/plan/:section" exact component={AuthHoc(Plan)}/>
                  <Route path="*" component={NotFound}/>
                </Switch>
              </div>
            </ConnectedRouter>
        )
    }

}

export default App
