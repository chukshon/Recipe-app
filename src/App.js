import { BrowserRouter } from 'react-router-dom'
import Category from './components/Category'
import Home from './page/Home'
import Pages from './page/Pages'

function App() {
  return (
    <BrowserRouter>
      <Category />
      <Pages />
    </BrowserRouter>
  )
}

export default App
