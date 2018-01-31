import React from 'react'
import App from './App'
import store from '../store'
import { Provider } from 'react-redux'
import Cookies from 'js-cookie';

import { testToken } from '../actions';

const cookieToken = Cookies.get('token');
store.dispatch(testToken(cookieToken));

function Root() {
    return (
        <Provider store = {store}>
            <App />
        </Provider>
    );
}

Root.propTypes = {

}

export default Root
