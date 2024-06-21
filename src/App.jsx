import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Navbar from './Components/Navbar'
import News from './Components/News'
import { Routes,Route } from 'react-router-dom'
import NewsItem from './Components/NewsItem'


export default function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route  path='/' element={<News category="genral" key="general"/>}/>
      <Route  path='/entertainment' element={<News  category="entertainment" key="entertainment"/>}/>
  
      <Route  path='/politics' element={<News category="politics" key="politics"/>}/>
      <Route  path='/health' element={<News category="health" key="health"/>}/>
      <Route  path='/sports' element={<News category="sports" key="sports"/>}/>    
      <Route  path='/science' element={<News category="science" key="science"/>}/>
      <Route  path='/business' element={<News  category="business" key="business"/>}/>
      <Route  path='/technology' element={<News  category="technology" key="technology"/>}/>    
      <Route  path='/brief' element={<NewsItem/>}/>    
    </Routes>
    
    </>
  )
}

// business entertainment general health science sports technology