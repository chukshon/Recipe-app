import { GiKnifeFork } from 'react-icons/gi'
import { BrowserRouter, Link } from 'react-router-dom'
import styled from 'styled-components'
import Category from './components/Category'
import Search from './components/Search'
import Home from './page/Home'
import Pages from './page/Pages'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={'/'}>Meal Delight</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  )
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Lobster two', cursive;
`

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`
export default App
