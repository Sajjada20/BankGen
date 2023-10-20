import React from 'react'
import '../styles/home.css'
import {discount, robot, bill, google, apple} from '../assets/index'
import {Navbar, UserStats, Footer} from '../components/index';
import { features, stats, HomeInfo } from '../index';
import { useNavigate } from 'react-router-dom';
import Features from '../components/Features';


function Home() {
  const navigate = useNavigate();
  return (
    <div className='alles'>
      <div className='home'>

        {/* title etc */}
        <div className='home-info'>
          <div className='home-div-discount'> {/* discount div */}
            <img src={discount} alt="discount-img" />
            <h5><a>20%</a> Discount For <a>1 Month</a> Account</h5>
          </div>
          <div>
            <h1 id='home-title'>The Next <br id='break'/> <strong>Generation</strong></h1>
          </div>
          <h1 id='home-title'><span id="home-title-span">Payment Method</span>.</h1>
          <p id='p'>Our team of experts use a <a>methodology to identify the credit cards</a> most likely to fit your needs. We <strong>examine annual percentage rates, annual fees</strong>.</p>
        </div>

        {/* robot image */}
        <div className='home-img'>
          <img src={robot} alt="" id='robot-image' />
        </div>
      </div>
      {/* stats */}
      <div className='stats-div-home'>
        {stats.map((data) => {
          const {id, title, value} = data;
          return <UserStats id={id} title={title} value={value} />
        })}
      </div>
      {/* features */}
      <div className='handleTheRest-div'>
        <div className='handle-div-1'>
          <h5>{HomeInfo.middle.title}<br/>{HomeInfo.middle.titleSecond}</h5>
          <p>{HomeInfo.middle.pargraph}</p>
          <button id='btn' onClick={() => navigate('/contact')}>{HomeInfo.middle.button}</button>
        </div>
        <div className='home-features-div'>
          {features.map((features) => {
            const {id, icon, title, content} = features;
            return (
              <Features id={id} title={title} image_icon={icon} paragraaf={content}  />
            );
          })}
        </div>
      </div>

      {/* paymethod */}
      <div className='pay-method'>
          <img src={bill} id='home-image-bill' />
        <div className='pay-method-div-info'>
          <h4>{HomeInfo.below.title}<br id='pay-break'/>{HomeInfo.below.titleSecond}</h4>
          <p>{HomeInfo.below.pargraph}</p>
          <div>
            <img src={apple}  id='home-store-icon' />
            <img src={google} id='home-store-icon'  />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home