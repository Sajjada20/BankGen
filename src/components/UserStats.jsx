import React from 'react'
import '../styles/userstats.css'



function UserStats(props) {
    const {id, title, value} = props
  return (
    <div className='userstats' key={id}>
        <h1>{value}</h1>
        <h3>{title}</h3>
    </div>
  )
}

export default UserStats