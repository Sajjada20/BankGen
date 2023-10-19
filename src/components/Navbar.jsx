import React, { useEffect, useState } from 'react'
import '../styles/navbar.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { logo1, menu, close } from '../assets'


function Navbar() {
  const [Uclose, setClose] = useState(true)
  const location = useLocation();
  const navigate = useNavigate();



  useEffect(() => {
    setClose(true)
  }, [location])

  return (
    <div className='navbar'>
        <div className='navbar-div-logo' onClick={() => navigate('/')}>
          <img src={logo1} alt="" id='logo' />
        </div>
        {/* mobile */}
        <div onClick={() => setClose((prevBool) => !prevBool)} className='navbar-div-icon'>
          <img src={Uclose ? menu : close} alt="" id='menu-close-icon' />
        </div>
        <div className={!Uclose ? 'mob-navbar-div-links' : 'display-non'}>
          <Link id='links-mob'  to={'/'}> Home</Link>
          <Link id='links-mob'  to={'/about'}> about us</Link>
          <Link id='links-mob'  to={'/contact'}> contact</Link>
        </div>
        {/* laptop */}
        <div className='navbar-div-links'>
          <Link id='links'  to={'/'}> Home</Link>
          <Link id='links'  to={'/about'}> about us</Link>
          <Link id='links'  to={'/contact'}> contact</Link>
        </div>
    </div>
  )
}

export default Navbar