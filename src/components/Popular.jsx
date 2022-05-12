import React, { useState, useEffect } from 'react'

const Popular = () => {
  const [popular, setPopular] = useState([])
  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    )
    const data = await api.json()
    setPopular(data.recipes)
  }

  useEffect(() => {
    getPopular()
  }, [])

  return (
    <>
      {popular.map((recipe) => {
        return (
          <div key={recipe.id}>
            <p>{recipe.title}</p>
          </div>
        )
      })}
    </>
  )
}

export default Popular
