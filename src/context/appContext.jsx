import React, { useContext, useReducer } from 'react'
import reducer from './reducer'
import { GET_POPULAR, TEST } from './action'

const AppContext = React.createContext()
const popular = localStorage.getItem('popular')
const initialState = {
  isLoading: false,
  popular: [],
}
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  //   const addPopularToLocalStorage = (allPopular) => {
  //     localStorage.setItem('popular', JSON.stringify(allPopular))
  //   }

  const getPopular = async () => {
    if (popular) {
      let localPopular = JSON.parse(popular)
      dispatch({ type: GET_POPULAR, payload: localPopular })
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      )
      const data = await api.json()
      const allPopular = data.recipes
      //   addPopularToLocalStorage(allPopular)
      localStorage.setItem('popular', JSON.stringify(allPopular))
      dispatch({ type: GET_POPULAR, payload: allPopular })
    }
  }

  return (
    <AppContext.Provider value={{ ...state, getPopular }}>
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider, initialState, useAppContext }
