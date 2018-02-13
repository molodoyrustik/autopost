import React from 'react';
import { render } from 'react-dom';

import Cookies from 'js-cookie';

import store from './store'
import { testToken } from './actions';

import Root from './components/Root';
import DevTools from './components/DevTools';

const cookieToken = Cookies.get('token');
store.dispatch(testToken(cookieToken))

render(Root(store), document.getElementById('root'))

if (process.env.NODE_ENV === 'development') {
  render(<DevTools store={window.store} />, document.getElementById('dev-tools'));
}
