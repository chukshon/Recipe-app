import { Splide, SplideSlide } from '@splidejs/react-splide'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import '@splidejs/react-splide/css'

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
    <Wrapper>
      <h3>Popular Picks</h3>
      <Splide
        options={{
          perPage: 4,
        }}
      >
        {popular.map((recipe) => {
          return (
            <SplideSlide>
              <Card key={recipe.id}>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
              </Card>
            </SplideSlide>
          )
        })}
      </Splide>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`
const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;

  img {
    border-radius: 2rem;
  }
`

export default Popular
