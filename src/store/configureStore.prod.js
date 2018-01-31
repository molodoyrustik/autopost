import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducer'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import history from '../history'


const enhancer = applyMiddleware(thunk, routerMiddleware(history));
const store = createStore(rootReducer, {}, enhancer);

export default store
