import axios from 'axios'
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from './authTypes'
import setAuthToken from './setAuthToken'

export const fetchToken = (email,password) => {
  return (dispatch) => {
    dispatch(fetchTokenRequest())
    axios
      .post('http://localhost:8000/api/getToken',{
        email: email,
        password: password
      })
      .then(response => {
        // response.data is the users
        const token = response.data;
        localStorage.setItem('JWT_access_token',token.access)
        localStorage.setItem('JWT_refresh_token',token.refresh)
        setAuthToken(token.access);
        dispatch(fetchTokenSuccess(token));
        
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchTokenFailure(error.message))
      })
  }
}

export const fetchTokenRequest = () => {
  return {
    type: LOGIN_REQUEST
  }
}

export const fetchTokenSuccess = token => {
  return {
    type: LOGIN_SUCCESS,
    payload: token
  }
}

export const fetchTokenFailure = error => {
  return {
    type: LOGIN_FAILURE,
    payload: error
  }
}

export const logoutUser = () => dispatch => {
  localStorage.removeItem('JWT_access_token');
  localStorage.removeItem('JWT_refresh_token');
  console.log("pankaj")
}
