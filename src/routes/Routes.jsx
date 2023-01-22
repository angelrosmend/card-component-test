import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductsList from '../pages/ProductList/ProductsList'

function AppRoutes() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<ProductsList/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes