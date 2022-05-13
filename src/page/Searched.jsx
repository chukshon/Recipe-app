import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'

const Searched = () => {
  const [searched, setSearched] = useState([])
  const [loading, setLoading] = useState(false)
  const params = useParams()
  const getSearched = async (name) => {
    setLoading(true)
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    )
    const data = await api.json()
    setSearched(data.results)
    setLoading(false)
  }
  useEffect(() => {
    getSearched(params.type)
    console.log(params.type)
  }, [params.type])

  if (searched) {
    return (
      <>
        {loading && <h1>Loading.....</h1>}
        <Grid>
          {searched.map((item) => {
            return (
              <Card key={item.id}>
                <Link to={`/details/${item.id}`}>
                  <img src={item.image} alt='item.title' />
                  <h4>{item.title}</h4>
                </Link>
              </Card>
            )
          })}
        </Grid>
      </>
    )
  } else {
    return <h1>Item not found</h1>
  }
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`

export default Searched
