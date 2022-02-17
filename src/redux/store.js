import {createStore, applyMiddleware} from 'redux'
import rootReducers from './todos'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';


const middleware = [thunk]

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(...middleware)))