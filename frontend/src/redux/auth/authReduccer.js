import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    // TOKEN_REQUEST,
    // TOKEN_SUCCESS,
    // TOKEN_FAILURE
  } from './authTypes'
  import jwt_decode from "jwt-decode";

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
  
  export function accessToken(state) {
    if (state.token) {
        return  state.token.access
    }
  }
    
  export function refreshToken(state) {
    if (state.token) {
        return  state.token.refresh
    }
  }
    
  export function isAccessTokenExpired(state) {
  if (state.token && state.token.access) {
    return 1000 * jwt_decode(state.token.refresh).exp - (new Date()).getTime() < 5000
  }
  return true
  }
  export function isRefreshTokenExpired(state) {
    if (state.token && state.token.refresh) {
    return 1000 * jwt_decode(state.token.refresh).exp - (new Date()).getTime() < 5000
  }
  return true
  }
  export function isAuthenticated(state) {
    return !isRefreshTokenExpired(state)
  }
  export function errors(state) {
   return  state.error
  }

  export default authReducer
  