import { GET_POPULAR, TEST } from './action'

const reducer = (state, action) => {
  if (action.type === GET_POPULAR) {
    return {
      ...state,
      popular: action.payload,
    }
  }
  throw new Error(`no such action : ${action.type}`)
}

export default reducer
