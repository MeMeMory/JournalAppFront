import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Auth from '../pages/auth/Auth'
import Home from '../pages/home/Home'
import Students from '../pages/students/Students'

import { RequireAuth } from '@/helpers/router.helper'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth' element={<Auth />} />
        <Route
          path='/'
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          path='/students/:id'
          element={
            <RequireAuth>
              <Students />
            </RequireAuth>
          }
        />
        <Route path='*' element={<div>Not found</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
