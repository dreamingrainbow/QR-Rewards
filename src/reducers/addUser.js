import {
    REGISTRATION_ERROR, 
    REGISTRATION_FAILED, 
    REGISTRATION_PENDING, 
    USER_REGISTERED
} from '../actions';
  
export default (addUser = null, action) => {
    switch (action.type) {
      case USER_REGISTERED:
        return true;
      case REGISTRATION_ERROR:
        return { error : action.payload };
      case REGISTRATION_PENDING:
      case REGISTRATION_FAILED:      
        return false;
      default:
        return null;
    }
};