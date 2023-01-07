import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    // TOKEN_REQUEST,
    // TOKEN_SUCCESS,
    // TOKEN_FAILURE
  } from './authTypes'
  
  const initialState = {
    loading: false,
    token: [],
    error: ''
  }
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_REQUEST:
        return {
          ...state,
          loading: true
        }
      case LOGIN_SUCCESS:
        return {
          loading: false,
          token: action.payload,
          error: ''
        }
      case LOGIN_FAILURE:
        return {
          loading: false,
          token: [],
          error: action.payload
        }
      default: return state
    }
  }
  
  export default authReducer
  