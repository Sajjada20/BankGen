import React, { useState } from 'react'
import { like2, likeFillRed, quotes } from '../assets'
import '../styles/feedback.css'



function Feedback({id, content, name, title, img, likeCount=99}) {
  const [count, setCount] = useState(likeCount)
  const [IsTrue, setIsTrue] = useState(true)

  function handleCount() {
    setIsTrue((prevBool) => (!prevBool)) /* !bool */

    if (IsTrue===true) {  /* likeCount+1 => liked */
      setCount((prevNum) => prevNum+1)
    }
    else if (IsTrue===false) { /* likeCount-1 => !liked */
      setCount((prevNum) => prevNum-1)
    }
  }

  return (
    <div key={id} className='feedback'>
      <div className='space-around-div-feedback'>
      <img src={quotes} id='quote' />
      <div className='like-div' onClick={handleCount} >
        <h5>{count}</h5>
        <img src={IsTrue ? like2 : likeFillRed} id='like' />
        </div>
      </div>
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