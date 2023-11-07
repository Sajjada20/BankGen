import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home, About, Contact} from './pages/index'
import {Navbar, Footer, Error} from './components/index';
import Mycontext from './context/Mycontext';



function App() {
  return (
    <div className='App'>
      <Mycontext>
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
      </Mycontext>
    </div>
  )
}

export default App
