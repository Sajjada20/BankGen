import React, { useContext, useEffect, useState } from 'react'
import '../styles/start.css'



function Contact() {
  const [MainData, setMainData] = useState([])
  const [data, setData] = useState({
    name: '',
    subject: '',
    email: '',
    message: '',
  })


console.log(MainData);

  const transferData = (value, id) => {
    setData((prevData) => ({ ...prevData, [id]: value }));
  }; 
  function dataOverzet() {
    setMainData((prevData) => ([...prevData, data]))
  }
  return (
    <div className='contact-main-div'>

      <div className='contact-div-text'>
        <h1 id='contact-h1'>Get In <strong>Contact</strong></h1>
        <p id='contact-p'>Whether you are starting a project, have business inquiries or just want to say hi, my inbox is always open so feel free to reach out and I will get back to you as soon as possible.</p>
        <button className='btnt'><a id='a-contact' href='mailto:sajjadarr978@gmail.com' target='_blank' >send me an email instead</a></button>
      </div>

      {/* input */}
      <div className='contact-div-input'>
        <div className='input-div-name-subject'>
          <input type="text"  placeholder='Name*' onChange={(e) => transferData(e.target.value, 'name')} />
          <input type="text"  placeholder='Subject*'  onChange={(e) => transferData(e.target.value, 'subject')}/>
        </div>
          <input type="email"  placeholder='Email*'   onChange={(e) => transferData(e.target.value, 'email')} />
          <input type="text" id='message-contact'  placeholder='Message*'  onChange={(e) => transferData(e.target.value, 'message')} />
          <button id='btn' onClick={dataOverzet}>
            <span id='btn-contact'> submit </span>
          </button>
      </div>
    </div>
  );
}

export default Contact