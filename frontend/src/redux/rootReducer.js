import { combineReducers } from 'redux'
import authReducer from './auth/authReduccer'
import cakeReducer from './cake/cakeReducer'


const rootReducer = combineReducers({
  cake: cakeReducer,
  auth: authReducer,
})

export default rootReducer
