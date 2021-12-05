import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { mainReducer } from './mainReducer';

const rootReducer = combineReducers({
    data: mainReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));