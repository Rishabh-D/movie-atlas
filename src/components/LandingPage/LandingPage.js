import React from 'react'
import './LandingPage.scss'
import LandingPagedefault from '../../images/landingPagesmall.jpg'
const LandingPage = () => {
  return (
        <div className="landing" id="dv">
            <div className="disabled" >
                <img src={LandingPagedefault}/>
            </div>
            <h1>Welcome to Movie App</h1>
            <p>Search info about latest movies, TV shows only on Movie App</p>
        </div>
  )
}

export default LandingPage
