import {call, takeLatest, put } from "redux-saga/effects";
import { GET_USER_CALL} from './actionTypes';
// import Api from '...'

function* getUserCall() {
  try {
    const userData = yield fetch('https://api.github.com/users/5')
    .then(response => response.json(), );    
yield put({ type: GET_USER_CALL, preload: userData });

 } catch (e) {
    // yield put({type: "USER_FETCH_FAILED", message: e.message});
 }
}

export function* watchgetUsers(user) {
  // console.log("user", action)
  console.log("saga....")
  yield takeLatest("GET_USER", getUserCall);
}

