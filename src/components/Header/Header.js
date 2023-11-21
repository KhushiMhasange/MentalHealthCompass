import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className="header-container">
    <div className='header-row-1'>
      <div className="header-image-1"></div>
      <div className="header-content-1">
      <h1>Empowering Mental Health and Wellness.</h1>
    </div>
    </div>
    <div className='header-row-2'>
      <div className="header-image-2"></div>
      <div className="header-content-2">  
      <p>Our platform is dedicated to providing access to resources, support, and a safe space for people to talk about their mental health experiences. We understand the importance of mental health and strive to provide solutions.
      </p><p>We are here to support you on your journey to wellness. We encourage individuals to take the first step towards a happier and healthier life by nurturing yourself and tracking your mental health via Mental Health Compass.<br />
      </p>
      </div>
    </div>
  </header>
  )
}

export default Header