import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Favourite from '../Pages/Favourite'


const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/favourite' element={<Favourite/>}/>
        
    </Routes>
  )
}

export default AllRoutes