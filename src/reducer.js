import { GET_USER_CALL, SET_LOADING, ERROR_DATA } from './actionTypes';

const initialState = {
  users: null,
  loading: false,
  userData: false,
  error: false
}

export default (state = { initialState }, action) => {
  switch (action.type) {

    case SET_LOADING:
      return {
        ...state,
        loading: true
      }

    case GET_USER_CALL:
      console.log(action.preload)
      return {
        ...state,
        userData: true,
        users: action.preload,
        loading: false
      }

    case ERROR_DATA:
      return {
        ...state,
        users: null,
        userData: true,
        loading: false
      }

    default:
      return state;
  }
}
