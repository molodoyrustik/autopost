import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import authReducer from './authReducer';
import userReducer from './userReducer';

export default combineReducers({
    router: routerReducer,
    auth: authReducer,
    user: userReducer
})
