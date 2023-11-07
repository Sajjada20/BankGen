import React from 'react'
import '../styles/error.css'
import { useNavigate } from 'react-router-dom'
function Error() {
    const navigate = useNavigate()    
  return (
    <div className='error'>
        <h1>Oops!</h1>
        <h3>404 - PAGE NOT FOUND</h3>
        <p>The page you are looking for might have been removed had its name chnaged or is temporarily unavailable.</p>
        <button onClick={() => navigate('/')}>Go to Home Page</button>
    </div>
  )
}

export default Error