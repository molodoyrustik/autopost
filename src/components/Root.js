import React from 'react';
import App from './App'
import store from '../store'
import { Provider } from 'react-redux'
import Cookies from 'js-cookie';

import { testToken } from '../actions';

const cookieToken = Cookies.get('token');
// store.dispatch(testToken(cookieToken))

const Root = () => {
  return (
    <Provider store = {store}>
        <App />
    </Provider>
  )
}

export default Root;
