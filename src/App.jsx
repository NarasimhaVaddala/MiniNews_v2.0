import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Navbar from './Components/Navbar'
import News from './Components/News'
import { Routes,Route } from 'react-router-dom'
import NewsItem from './Components/NewsItem'
import About from './Components/About'
import ContactPage from './Components/ContactPage'


export default function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route  path='/' element={<News category="general" key="general"/>}/>
      <Route  path='/food' element={<News  category="food" key="food"/>}/>
      <Route  path='/politics' element={<News category="politics" key="politics"/>}/>
      <Route  path='/movie' element={<News category="movie" key="movie"/>}/>
      <Route  path='/sports' element={<News category="sports" key="sports"/>}/>    
      <Route  path='/environment' element={<News category="environment" key="environment"/>}/>
      <Route  path='/business' element={<News  category="business" key="business"/>}/>
      <Route  path='/technology' element={<News  category="technology" key="technology"/>}/>    
      <Route  path='/brief' element={<NewsItem/>}/>    
      <Route  path='/about' element={<About/>}/>    
      {/* <Route  path='/contact' element={<ContactPage/>}/>     */}
    </Routes>
    
    </>
  )
}

// business entertainment general health science sports technology