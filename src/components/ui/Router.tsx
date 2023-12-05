import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '../pages/home/Home'
import Students from '../pages/students/Students'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Students />} path='/product/:id' />
        <Route element={<div>Not found</div>} path='*' />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
