import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Search = () => {
  const [value, setValue] = useState('')
  const navigate = useNavigate()
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`searched/${value}`)
    setValue('')
  }
  return (
    <FormStyle onSubmit={handleSubmit}>
      <div>
        <input type='text' value={value} onChange={handleChange} />
        <FaSearch></FaSearch>
      </div>
    </FormStyle>
  )
}

const FormStyle = styled.form`
  margin: 0rem;
  div {
    width: 100%;
    position: relative;
  }
  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
    color: white;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(100%, -50%);
    color: white;
  }
`
export default Search
