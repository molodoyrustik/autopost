import { SUBMIT_LOGIN_DATA, SUBMIT_SIGNUP_DATA, TEST_TOKEN, LOGOUT, SUCCESS } from '../actions/constants';

const defautState = {
  authenticated: false,
  token: ''
};

export default (authState = defautState, action) => {
  const { type, success, token, authenticated } = action;

  switch (type) {
    case SUBMIT_LOGIN_DATA + SUCCESS:
      return { ...authState, token, authenticated };
    case SUBMIT_SIGNUP_DATA + SUCCESS:
      return { ...authState, token, authenticated };
    case TEST_TOKEN + SUCCESS:
      return { ...authState, authenticated: success, token: action.payload.token };
    case LOGOUT + SUCCESS:
      return { ...authState, authenticated: false }
    default:
      return authState;
  }
};
