import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home, About, Contact} from './pages/index'
import {Navbar, Footer, Error} from './components/index';


function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/about' element={<About/>} />
          <Route path='*' element={<Error/>} />
        </Routes>
      <Footer/>
      </Router>
    </div>
  )
}

export default App
