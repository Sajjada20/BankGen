import React from 'react'
import '../styles/footer.css'
import { logo1 } from '../assets'
import { footerLinks } from '../index.js'
import { useNavigate } from 'react-router-dom'




const url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"


function Footer() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/contact')
  }
  return (
    <div className='footer'>
      <div className='footer-div-1'>
        <img src={logo1} alt="" id="logo" onClick={() => navigate('/')} />
        <h4>A new way to make payments <strong>easy</strong>, <strong>reliable</strong> and <strong>secure</strong>.</h4>
      </div>
      <div className='footer-div-2'>
        {footerLinks.map((data) => {
          const {title, links} = data
          return (
            <div className='footer-link-div'>
              <h1>{title}</h1>
              <div className='div-link'>
                {links.map((link) => {
                  return (
                    <div onClick={handleNavigate}>
                      <a id='footer-a' href={url} target='_blank'>{link.name}</a>
                    </div>
                    );
                  })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Footer