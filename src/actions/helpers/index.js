import axios from 'axios';
import { 
    USER_REGISTERED,
    REGISTRATION_ERROR,
    REGISTRATION_FAILED,
    REGISTRATION_PENDING,
    AUTHENTICATION_PENDING, 
    USER_AUTHENTICATED, 
    USER_UNAUTHENTICATED, 
    AUTHENTICATION_ERROR, 
    USER_EXISTS, 
    CHECK_USER_ERROR, 
    USER_NAME_FREE 
} from '../constants';

export const checkUsername = (username) => {
    return dispatch => {
        dispatch({
            type : USER_EXISTS,
            payload : 'Unverified' 
        });
        return axios
            .get(`http://localhost:3001/Users/${username}`)
            .then(response => {
                if(response.status === 200){
                    if(response.data.userExists) {
                        dispatch({
                            type : USER_EXISTS
                        })
                    } else {
                        dispatch({
                            type : USER_NAME_FREE
                        })
                    }
                } else {
                    dispatch({
                        type : CHECK_USER_ERROR,
                        payload : response
                    })
                }
            })
            .catch(error => {
                dispatch({
                    type : CHECK_USER_ERROR,
                    payload : error
                })
            });
    }
}

export const authenticateUser = (username, signature) => {
    return dispatch => {
        dispatch({
            type : AUTHENTICATION_PENDING
        });
        return axios
            .post(`http://localhost:3001/Authenticate`, {username, signature})
            .then(response => {
                if(response.status === 200){
                    if(response.data.authenticated) {
                        dispatch({
                            type : USER_AUTHENTICATED,
                            payload : {
                                authenticated : response.data.authenticated,
                                username,
                                token : response.data.token
                            }
                        })
                    } else {
                        dispatch({
                            type : USER_UNAUTHENTICATED
                        })
                    }
                } else {
                    dispatch({
                        type : AUTHENTICATION_ERROR,
                        payload : response
                    })
                }
            })
            .catch(error => {
                dispatch({
                    type : AUTHENTICATION_ERROR,
                    payload : error
                })
            });
    }
}

export const sendRegistration = (newUserProfile) => {
    return dispatch => {
        dispatch({
            type : REGISTRATION_PENDING
        });
        return axios
            .post(`http://localhost:3001/Users`, newUserProfile )
            .then(response => {
                if(response.status === 200){
                    if(response.data.userCreated) {
                        dispatch({
                            type : USER_REGISTERED
                        })
                    } else {
                        dispatch({
                            type : REGISTRATION_FAILED
                        })
                    }
                } else {
                    dispatch({
                        type : REGISTRATION_ERROR,
                        payload : response
                    })
                }
            })
            .catch(error => {
                dispatch({
                        type : REGISTRATION_ERROR,
                        payload : error
                    })
            });
    }
}