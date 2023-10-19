import React from 'react'
import { quotes } from '../assets'
import '../styles/feedback.css'




function Feedback({id, content, name, title, img}) {
  return (
    <div key={id} className='feedback'>
      <img src={quotes} id='quote' />
      <p>{content}</p>
      <div className='feedback-user-div'>
        <img src={img} id='feed-image-user'/>
        <div>
          <h4 id='feed-h4'>{name}</h4>
          <h5 id='feed-h5'>{title}</h5>
        </div>
      </div>
    </div>
  )
}

export default Feedback