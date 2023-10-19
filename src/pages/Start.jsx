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


  useEffect(() => {
    console.log(MainData); // maindata update ? it will show
  }, [MainData])

  const transferData = (value, id) => {
    setData((prevData) => ({ ...prevData, [id]: value }));
  }; 
  function dataOverzet() {
    setMainData((prevData) => ([...prevData, data]))
  }
  return (
    <div className='contact-div-hoofd'>
      <div className='contact-div'>
        <div className='contact-child-div'>
          <h1 id='contact-h1'>Get In <strong>Contact</strong></h1>
          <p id={'contact-p'}>Whether you are starting a project, have business inquiries or just want to say hi, my inbox is always open so feel free to reach out and I will get back to you as soon as possible.</p>
          <button className='btnt'><a id='a-contact' href='mailto:sajjadarr978@gmail.com' target='_blank' >send me an email instead</a></button>
        </div>
        
        <div className='contact-input-div'>
          <div className='contact-input-child'>
            <input type="text" className={'contact-input'} placeholder='Name*' onChange={(e) => transferData(e.target.value, 'name')} />
            <input type="text" className={'contact-input'} placeholder='Subject*'  onChange={(e) => transferData(e.target.value, 'subject')}/>
          </div>

          <div className='contact-input-kleine'>
            <input type="email" className={'contact-input'} placeholder='Email*'  id='input-email-id' onChange={(e) => transferData(e.target.value, 'email')} />
          </div>

          <div className='contact-input-kleine' >
            <input type="text" className={'contact-input'} placeholder='Message*' id='enige-input-id' onChange={(e) => transferData(e.target.value, 'message')} />
          </div>

          <button id='btn' onClick={dataOverzet} > Submit</button>

        </div>
      </div>
    </div>
  )
}

export default Contact