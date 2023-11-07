import React from 'react'
import '../styles/about.css'
import { airbnb, binance, card, coinbase, dropbox } from '../assets'
import { feedback, aboutInfo } from '..'
import Feedback from '../components/Feedback'
import { useNavigate } from 'react-router-dom'







function About() {
  const navigate = useNavigate();

  function GoContact(){
    navigate('/contact')
  }

  return (
    <div className="about">
      <h1 id='about-title'>{aboutInfo.above.title}</h1>
      <div className='about-div'>
        <div className='about-info-div'>
          <h3>{aboutInfo.above.titleSecond}</h3>
          <p>{aboutInfo.above.pargraph}</p>
          <button id='btn' onClick={GoContact}>{aboutInfo.above.button}</button>
        </div>
        <div>
          <img src={card} id='about-image-card' />
        </div>
      </div>
      {/* user */}
      <div className='about-user-div'>
        <h3 id='feeback-h3'>{aboutInfo.middle.title}</h3>
        <div className='about-feedback'>
          {feedback.map((data, index) => {
            return (
              <Feedback data={data} idx={index}/>
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
          <h1>{aboutInfo.below.title}</h1>
          <p>{aboutInfo.below.pargraph}</p>
        </div>
        <button id='btn-service' onClick={GoContact}>{aboutInfo.below.button}</button>
      </div>
    </div>
  )
}

export default About