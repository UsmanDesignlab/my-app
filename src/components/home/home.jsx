import React from 'react'
import "./home.css"
import { Link } from 'react-router-dom'
import Many from './many'
import "./sizes.css"
import Main from './main'
import Video from '../common/video-one/video'
import Pic from './pic'
const Home = () => {
  return (
    <>
    <div className='main_one'>
    <div className='home'>
      <div className='design'>
        <h1>USMAN</h1>
        <h1>DESIGN <span>STUDO</span></h1>
      </div>
      <div className='design-one'>
       <h5>We are a creative studio based in</h5>
        <h5>Islamabad,We build solid brands that needs no</h5>
        <h5 className='start'>introduction at all</h5>
      </div>
    </div>
    <div className='featured'>
      <div className='features'>
        <h2>[ FEATURED PROJECTS ]</h2>
      </div>
      <div className='features-one'>
        <h2><Link to="contact">[ HIRE US ]</Link></h2>
      </div>
    </div>
    <Many />
    <Main />
    <Video />
    <div className="name-two">
    <div className='name'>
    <div className='tag'>
    <h4>We cherish partnerships we have cultivated, each one a testament to commitment.</h4>
  </div>
  </div>
    <div className='name'>
    <div className='tag'>
    <h4>[ OUR CLIENTS ]</h4>
  </div>
  </div>
  </div>
  <Pic />
  </div>
    </>
  )
}

export default Home;