
import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import reducer from './reducer';
import {watchgetUsers} from './Saga';

import createSagaMiddleware from "redux-saga";
const sagaMiddleware = createSagaMiddleware();

// const middleware = [thunk];

const store = createStore(
    reducer,applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(watchgetUsers);

export default store;