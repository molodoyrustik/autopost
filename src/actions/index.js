import axios from 'axios';
import { push } from 'react-router-redux';
import Cookies from 'js-cookie';
import { SUBMIT_LOGIN_DATA,
  SUBMIT_SIGNUP_DATA,
  TEST_TOKEN,
  LOGOUT,
  GET_ACCOUNTS,
  SET_ACCOUNT,
  EDIT_ACCOUNT,
  DELETE_ACCOUNT,
  GET_POSTS,
  SET_POST,
  DELETE_POST,
  START, SUCCESS, FAIL } from './constants';

let mainApi = 'http://46.101.222.238:80/'

export function login(data, type) {
  let apiUrl = 'auth/login'

  return (dispatch) => {
    dispatch({
      type: SUBMIT_LOGIN_DATA + START,
      payload: {
        data
      }
    });
  console.log(`${mainApi}${apiUrl}`)
    return (axios.post(`${mainApi}${apiUrl}`, data)

        .then((response) => {
          let token = ''
          let authenticated = false;
          let user = {};
          if(response.data.authenticated) {
            token = response.data.success.access_token;
            authenticated = response.data.authenticated;
            Cookies.set('token', `${token}`);
            user = response.data.user;
          }
          dispatch({
            type: SUBMIT_LOGIN_DATA + SUCCESS,
            payload: { data },
            token,
            authenticated,
            user
          });

          return dispatch(push('/private/cabinet'))
        })
        .catch(error => {
          dispatch({
            type: SUBMIT_LOGIN_DATA + FAIL,
            payload: { data, error }
          });
        })
    );
  };
}

export function logout() {
  return (dispatch) => {
    Cookies.remove('token');

    dispatch({
      type: LOGOUT + SUCCESS,
      payload: {}
    });

    return dispatch(push('/login'));
  };
}

export function signup(data, type) {
  let apiUrl = 'auth/signup';

  return (dispatch) => {
    dispatch({
      type: SUBMIT_SIGNUP_DATA + START,
      payload: {
        data
      }
    });

    return (axios.post(`${mainApi}${apiUrl}`, data)

        .then((response) => {
          let token = ''
          let authenticated = false;
          let user = {};
          if(response.data.authenticated) {
            token = response.data.success.access_token;
            authenticated = response.data.authenticated;
            Cookies.set('token', `${token}`);
            user = response.data.user;
          }
          dispatch({
            type: SUBMIT_SIGNUP_DATA + SUCCESS,
            payload: { data },
            token,
            authenticated,
            user
          });

          return dispatch(push('/private/cabinet'))
        })
        .catch(error => {
          dispatch({
            type: SUBMIT_SIGNUP_DATA + FAIL,
            payload: { data, error }
          });
        })
    );
  };
}

export function testToken(cookieToken) {
  return (dispatch, getState) => {
    const token = cookieToken || '';

    dispatch({
      type: TEST_TOKEN + START,
      payload: {
        token
      }
    });

    return (
      axios.post(`${mainApi}auth/token`, { access_token: token  })
        .then((response) => {
          let user = {};
          let success = false;
          if(response.data.success) {
            user = response.data.user;
            success = response.data.success;
          }
          dispatch({
            type: TEST_TOKEN + SUCCESS,
            payload: { token },
            success,
            user
          });

          dispatch(push('/private'));
        })
        .catch(error => {
          dispatch({
            type: TEST_TOKEN + FAIL,
            payload: { token },
            error
          });
        })
    );
  };
}

export function getAccounts() {
  return (dispatch, getState) => {

    dispatch({
      type: GET_ACCOUNTS + START,
      payload: {}
    });

    console.log(`Bearer ${getState().auth.token}`);
    return (

      axios.get(`${mainApi}account`,{
        headers: {
          'Authorization': `Bearer ${getState().auth.token}`
        }
      })
        .then((response) => {

          dispatch({
            type: GET_ACCOUNTS + SUCCESS,
            payload: {},
            response
          });

        })
        .catch(error => {
          dispatch({
            type: TEST_TOKEN + FAIL,
            payload: { },
            error
          });
            console.log(error);
        })
    );
  };
}

export function setAccount(data) {
  return (dispatch, getState) => {
    dispatch({
      type: SET_ACCOUNT + START,
      payload: {
        data
      }
    });

    const config = {
      headers: {'Authorization': `Bearer ${getState().auth.token}`},
    }

    return (axios.post(`${mainApi}account`, data, config)
        .then((response) => {
          dispatch({
            type: SET_ACCOUNT + SUCCESS,
            payload: { data },
          });

          dispatch(getAccounts());
        })
        .catch(error => {
          console.log(error);
          dispatch({
            type: SET_ACCOUNT + FAIL,
            payload: { data, error }
          });
        })
    );
  };
}

export function editAccount(data, id) {
  return (dispatch, getState) => {
    dispatch({
      type: EDIT_ACCOUNT + START,
      payload: {
        data
      }
    });

    const config = {
      headers: {'Authorization': `Bearer ${getState().auth.token}`},
    }

    return (axios.put(`${mainApi}account/${id}`, data, config)
        .then((response) => {
          dispatch({
            type: EDIT_ACCOUNT + SUCCESS,
            payload: { data },
          });

          dispatch(getAccounts());
        })
        .catch(error => {
          console.log(error);
          dispatch({
            type: EDIT_ACCOUNT + FAIL,
            payload: { data, error }
          });
        })
    );
  };
}

export function deleteAccount(data = {}, id) {
  return (dispatch, getState) => {
    dispatch({
      type: DELETE_ACCOUNT + START,
      payload: {}
    });

    const config = {
      headers: {'Authorization': `Bearer ${getState().auth.token}`},
    }


    return (axios.delete(`${mainApi}account/${id}`, config)
        .then((response) => {
          dispatch({
            type: DELETE_ACCOUNT + SUCCESS,
            payload: { id },
            response
          });

          dispatch(getAccounts());
        })
        .catch(error => {
          dispatch({
            type: DELETE_ACCOUNT + FAIL,
            payload: { error }
          });
        })
    );
  };
}

export function getPosts() {
  return (dispatch, getState) => {

    dispatch({
      type: GET_POSTS + START,
      payload: {}
    });
    return (

      axios.get(`${mainApi}posts`,{
        headers: {
          'Authorization': `Bearer ${getState().auth.token}`
        }
      })
        .then((response) => {
          dispatch({
            type: GET_POSTS + SUCCESS,
            payload: {},
            response
          });

        })
        .catch(error => {
          dispatch({
            type: GET_POSTS + FAIL,
            payload: { },
            error
          });
            console.log(error);
        })
    );
  };
}

export function setPost(data) {
  return (dispatch, getState) => {
    dispatch({
      type: SET_POST + START,
      payload: {
        data
      }
    });

    const config = {
      headers: {'Authorization': `Bearer ${getState().auth.token}`},
    }

    return (axios.post(`${mainApi}posts`, data, config)
        .then((response) => {
          dispatch({
            type: SET_POST + SUCCESS,
            payload: { data },
          });

          dispatch(getPosts());
        })
        .catch(error => {

          dispatch({
            type: SET_POST + FAIL,
            payload: { data, error }
          });
        })
    );
  };
}

export function deletePost(id) {
  return (dispatch, getState) => {
    dispatch({
      type: DELETE_POST + START,
      payload: {}
    });

    const config = {
      headers: {'Authorization': `Bearer ${getState().auth.token}`},
    }


    return (axios.delete(`${mainApi}posts/${id}`, config)
        .then((response) => {
          dispatch({
            type: DELETE_POST + SUCCESS,
            payload: { id },
            response
          });

          dispatch(getPosts());
        })
        .catch(error => {
          dispatch({
            type: DELETE_POST + FAIL,
            payload: { error }
          });
        })
    );
  };
}
