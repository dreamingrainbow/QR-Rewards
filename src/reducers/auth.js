import {
    AUTHENTICATION_PENDING,
    USER_AUTHENTICATED,
    USER_UNAUTHENTICATED,
    AUTHENTICATION_ERROR
  } from '../actions';
  
  export default (auth = { isAuthenticated : false }, action) => {
    switch (action.type) {
      case USER_AUTHENTICATED:
        return { isAuthenticated : action.payload.authenticated, username : action.payload.username, token : action.payload.token};
      case USER_UNAUTHENTICATED:
        return { isAuthenticated : false, token : undefined };
      case AUTHENTICATION_ERROR:
        return { error : action.payload, isAuthenticated : false, token : undefined };
      case AUTHENTICATION_PENDING:
      default:
        return auth;
    }
  };