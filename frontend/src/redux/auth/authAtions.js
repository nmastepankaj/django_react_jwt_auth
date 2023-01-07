import axios from 'axios'
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from './authTypes'

export const fetchToken = () => {
  return (dispatch) => {
    dispatch(fetchTokenRequest())
    
    axios
      .post('http://localhost:8000/api/getToken',{
        email: 'pankaj@codingnap.com',
        password: 'pankaj'
      })
      .then(response => {
        // response.data is the users
        const token = response.data
        dispatch(fetchTokenSuccess(token))
        console.log("first")
        return token;
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

export const fetchTokenSuccess = users => {
  return {
    type: LOGIN_SUCCESS,
    payload: users
  }
}

export const fetchTokenFailure = error => {
  return {
    type: LOGIN_FAILURE,
    payload: error
  }
}
