import Home from './Home'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cuisine from './Cuisine'
import Searched from './Searched'
import Details from './Details'

const Pages = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cuisine/:type' element={<Cuisine />} />
      <Route path='/recipe/:id' element={<Details />} />
      <Route path='/searched/:type' element={<Searched />} />
    </Routes>
  )
}

export default Pages
