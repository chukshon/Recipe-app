import Home from './Home'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cuisine from './Cuisine'
import Recipe from './Recipe'

const Pages = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cuisine/:type' element={<Cuisine />} />
      <Route path='/recipe/:type' element={<Recipe />} />
    </Routes>
  )
}

export default Pages
