import {
  GET_CUISINE,
  GET_DETAILS,
  GET_POPULAR,
  GET_SEARCHED,
  GET_VEGGIE,
  SET_LOADING,
} from './action'

const reducer = (state, action) => {
  if (action.type === GET_POPULAR) {
    return {
      ...state,
      popular: action.payload,
    }
  }
  if (action.type === GET_VEGGIE) {
    return {
      ...state,
      veggie: action.payload,
    }
  }
  if (action.type === GET_CUISINE) {
    return {
      ...state,
      cuisine: action.payload,
    }
  }
  if (action.type === GET_DETAILS) {
    return {
      ...state,
      details: action.payload,
    }
  }
  if (action.type === GET_SEARCHED) {
    return {
      ...state,
      searched: action.payload,
      loading: false,
    }
  }
  if (action.type === SET_LOADING) {
    return {
      ...state,
      loading: true,
    }
  }
  throw new Error(`no such action : ${action.type}`)
}

export default reducer
