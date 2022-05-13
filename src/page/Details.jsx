import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const Details = () => {
  const [details, setDetails] = useState({})
  const [active, setActive] = useState('instructions')

  const params = useParams()
  const getDetails = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    )
    const data = await api.json()
    setDetails(data)
  }
  useEffect(() => {
    getDetails()
  }, [params.id])

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt='' />
      </div>
      <Info>
        <Button
          onClick={() => {
            setActive('instructions')
          }}
          className={active === 'instructions' ? 'active' : ''}
        >
          Instructions
        </Button>
        <Button
          onClick={() => {
            setActive('ingredients')
          }}
          className={active === 'ingredients' ? 'active' : ''}
        >
          Ingredients
        </Button>
        {active === 'instructions' && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}
        {active === 'ingredients' && (
          <ul>
            {details.extendedIngredients.map((ingredient) => {
              return <li key={ingredient.id}>{ingredient.original}</li>
            })}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
`

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  cursor: pointer;
`

const Info = styled.div`
  margin-left: 10rem;
`

export default Details
