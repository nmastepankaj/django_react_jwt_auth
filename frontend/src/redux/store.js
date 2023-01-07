import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore(
 { 
    reducer: rootReducer,
    middleware: [thunk, logger],
    devTools: process.env.NODE_ENV !== 'production',
}
)

export default store
