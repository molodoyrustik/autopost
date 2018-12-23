import React from 'react';
import { render } from 'react-dom';

import Root from './components/Root';
import DevTools from './components/DevTools';

render(<Root />, document.getElementById('root'))

if (process.env.NODE_ENV === 'development') {
  render(<DevTools store={window.store} />, document.getElementById('dev-tools'));
}
