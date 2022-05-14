import React, { useContext, useReducer } from 'react'
import reducer from './reducer'
import {
  GET_CUISINE,
  GET_DETAILS,
  GET_POPULAR,
  GET_SEARCHED,
  GET_VEGGIE,
  SET_LOADING,
} from './action'

const AppContext = React.createContext()
const popular = localStorage.getItem('popular')
const veggie = localStorage.getItem('veggie')
const initialState = {
  loading: false,
  popular: [],
  veggie: [],
  cuisine: [],
  details: {},
  searched: [],
}
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

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
      localStorage.setItem('popular', JSON.stringify(allPopular))
      dispatch({ type: GET_POPULAR, payload: allPopular })
    }
  }

  const getVeggie = async () => {
    if (veggie) {
      let localVeggie = JSON.parse(veggie)
      dispatch({ type: GET_VEGGIE, payload: localVeggie })
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
      )
      const data = await api.json()
      const allVeggie = data.recipes
      localStorage.setItem('veggie', JSON.stringify(allVeggie))
      dispatch({ type: GET_VEGGIE, payload: allVeggie })
    }
  }

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=9=${name}`
    )
    const recipes = await data.json()
    const allCuisines = recipes.results
    dispatch({ type: GET_CUISINE, payload: allCuisines })
  }

  const getDetails = async (type) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/${type}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    )
    const data = await api.json()
    dispatch({ type: GET_DETAILS, payload: data })
  }

  const getSearched = async (name) => {
    dispatch({ type: SET_LOADING })
    dispatch({ type: GET_SEARCHED, payload: [] })
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    )
    const data = await api.json()
    dispatch({ type: GET_SEARCHED, payload: data.results })
  }
  return (
    <AppContext.Provider
      value={{
        ...state,
        getPopular,
        getVeggie,
        getCuisine,
        getDetails,
        getSearched,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider, initialState, useAppContext }
