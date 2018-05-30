import {
    USER_AUTHENTICATED,
    USER_UNAUTHENTICATED,
    AUTHENTICATION_ERROR
  } from '../actions';
  
  export default (auth = {}, action) => {
    switch (action.type) {
      case USER_AUTHENTICATED:
        return { ...auth, authenticated: true, token: action.payload};
      case USER_UNAUTHENTICATED:
        return { ...auth, authenticated: false, token: undefined };
      case AUTHENTICATION_ERROR:
        return { ...auth, error: action.payload, token: undefined };
      default:
        return { ...auth };
    }
  };