import { combineReducers } from 'redux';
import AuthenticationReducer from './auth';
import UsernameRegistrationReducer from './userExists';
import AddUserReducer from './addUser';

const state = {};
state.error = [];
state.alerts = [];
state.popovers = [];
state.modals = [];
state.page  = {
  url : '/',
  name : 'Home'
};

state.authentication = AuthenticationReducer;
state.userExists = UsernameRegistrationReducer;
state.userAdded = AddUserReducer;
const rootReducer = combineReducers(state);

export default rootReducer;