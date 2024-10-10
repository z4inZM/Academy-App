import React from 'react'
import './Hero.css'
import arrow from '../../assets/arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>

    <div className='hero-text'>
      <h1>We ensure better skills in one Academy </h1>
      <p>At Zain Academy, Unlock your potential with flexible, hands-on learning experiences designed to take your skills to the next level.</p>
    <button className='btn dark-btn'>Explore Courses <img src={arrow}></img></button>
    </div>
    </div>
  )
}

export default Hero