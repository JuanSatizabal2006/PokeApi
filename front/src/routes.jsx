import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './views/home'

const RoutesCustom = () => {
  return (
    <Routes>
        <Route  path='/' element={ <Home /> } />
    </Routes>
  )
}

export default RoutesCustom