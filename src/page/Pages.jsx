import Home from './Home'

import { Route, Routes, useLocation } from 'react-router-dom'
import Cuisine from './Cuisine'
import Searched from './Searched'
import Details from './Details'
import { AnimatePresence } from 'framer-motion'

const Pages = () => {
  const location = useLocation()
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/cuisine/:type' element={<Cuisine />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/searched/:type' element={<Searched />} />
      </Routes>
    </AnimatePresence>
  )
}

export default Pages
