import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useAppContext } from '../context/appContext'
const Searched = () => {
  const { searched, getSearched, loading } = useAppContext()
  const params = useParams()
  useEffect(() => {
    getSearched(params.type)
  }, [params.type])

  if (searched.length > 0) {
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
