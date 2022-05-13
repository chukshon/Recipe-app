import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const Details = () => {
  const [details, setDetails] = useState({})
  const getDetails = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    )

    const data = await api.json()
    setDetails(data.results)
  }

  return <div>REcipe</div>
}

export default Details
