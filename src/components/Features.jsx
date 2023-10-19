import React from 'react'
import '../styles/feature.css'


function Features(props) {
    const {id, image_icon, title, paragraaf} = props
  return (
    <div className='feature'>
        <img src={image_icon} id='features-icon' />
        <div className='feature-div'>
            <h4>{title}</h4>
            <p>{paragraaf}</p>
        </div>
    </div>
  )
}

export default Features