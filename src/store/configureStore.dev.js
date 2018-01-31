import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducer'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import history from '../history'

import DevTools from '../components/DevTools';

const store = createStore(rootReducer, {}, compose(
    applyMiddleware(thunk, routerMiddleware(history)),
    DevTools.instrument()
  )
);

if (module.hot) {
  module.hot.accept('../reducer', () =>
    store.replaceReducer(require('../reducer').default)
  );
}


//dev only
window.store = store

export default store
