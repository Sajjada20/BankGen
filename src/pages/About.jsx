import React from 'react'
import '../styles/about.css'
import { airbnb, binance, card, coinbase, dropbox } from '../assets'
import { feedback } from '..'
import Feedback from '../components/Feedback'
import { useNavigate } from 'react-router-dom'







function About() {
  const navigate = useNavigate();

  function GoContact(){
    navigate('/contact')
  }

  return (
    <div className="about">
      <h1 id='about-title'>Welcome to BankGen, Your Financial Partner for the Future!</h1>
      <div className='about-div'>
        <div className='about-info-div'>
          <h3>Find a better card deal in few easy steps</h3>
          <p>We've been researching and comparing credit cards for over 15 years. You can easily compare more than 270 Australian credit cards using our free tools. When you find one that suits, we'll take you securely to the bank's website.</p>
          <button id='btn' onClick={GoContact}>Get Started</button>
        </div>
        <div>
          <img src={card} id='about-image-card' />
        </div>
      </div>
      {/* user */}
      <div className='about-user-div'>
        <h3 id='feeback-h3'>What people are saying about us</h3>
        <div className='about-feedback'>
          {feedback.map((data) => {
            const {id, content, name, title, img} = data;
            return (
              <Feedback id={id} content={content} name={name} title={title} img={img} />
            )
          })}
        </div>
      </div>
      {/* image  /////  css -> feedback.css */}
      <div className='about-image-div'>
        <img src={airbnb} alt="" />
        <img src={binance} alt="" />
        <img src={coinbase} alt="" />
        <img src={dropbox} alt="" />
      </div>
      {/* service */}
      <div className='about-service-div'>
        <div className='div-info-service'>
          <h1>Come try our service now!</h1>
          <p>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
        <button id='btn-service' onClick={GoContact}>Get Started</button>
      </div>
    </div>
  )
}

export default About