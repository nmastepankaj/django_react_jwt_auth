import { combineReducers } from 'redux'
import authReducer, * as fromAuth from './auth/authReduccer'
import cakeReducer from './cake/cakeReducer'


const rootReducer = combineReducers({
  cake: cakeReducer,
  auth: authReducer,
})

export const isAuthenticated =
 state => fromAuth.isAuthenticated(state.auth)
export const accessToken = 
  state => fromAuth.accessToken(state.auth)
export const isAccessTokenExpired =
  state => fromAuth.isAccessTokenExpired(state.auth)
export const refreshToken =
  state => fromAuth.refreshToken(state.auth)
export const isRefreshTokenExpired =
  state => fromAuth.isRefreshTokenExpired(state.auth)
export const authErrors =
  state => fromAuth.errors(state.auth)

export default rootReducer
