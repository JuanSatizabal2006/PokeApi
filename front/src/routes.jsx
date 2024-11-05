import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './views/home'
import Detail from './views/detail'

const RoutesCustom = () => {
  return (
    <Routes>
        <Route  path='/' element={ <Home /> } />
        <Route path='/pokemon/:id' element={ <Detail /> } />
    </Routes>
  )
}

export default RoutesCustom