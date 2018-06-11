import {
    USER_EXISTS, CHECK_USER_ERROR, USER_NAME_FREE
  } from '../actions';
  
  export default (userExists = null, action) => {
    switch (action.type) {
      case USER_EXISTS:
        return true;
      case CHECK_USER_ERROR:
        return { error : action.payload };
      case USER_NAME_FREE:
        return false;
      default:
        return null;
    }
  };