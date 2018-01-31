import { SUBMIT_LOGIN_DATA, TEST_TOKEN, GET_ACCOUNTS, GET_POSTS, SUCCESS } from '../actions/constants';

const defautState = {
  email: '',
  id: null,
  accounts: [],
  posts: []
};

export default (userState = defautState, action) => {
  const { type, response, user } = action;

  switch (type) {
    case SUBMIT_LOGIN_DATA + SUCCESS:
      return { ...userState, email: user.email, id: user.id };
    case TEST_TOKEN + SUCCESS:
      return { ...userState, email: user.email, id: user.id };
    case GET_ACCOUNTS + SUCCESS:
      return { ...userState, accounts: response.data };
    case GET_POSTS + SUCCESS:
      return { ...userState, posts: response.data };
    default:
      return userState;
  }
};
