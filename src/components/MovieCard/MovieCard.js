/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './MovieCard.scss'

const MovieCard = ({ data }) => {
  const { Year, imdbID, Poster } = data
  const [videoClass, setVideoClass] = useState('hidden')

  return (
        <div className='card-item'>
            <Link to={`/movie/${imdbID}`}>
                <div className='card-inner'>
                    <div className='card-top' onMouseEnter = {() => setVideoClass('')} onMouseLeave={() => setVideoClass('hidden')}>
                        <img className = {videoClass === '' ? 'hidden' : ''} src={Poster}/>
                        <video className={videoClass} disableRemotePlayback autoPlay muted playsInline loop width="100%" height="100%" >
                            <source src="images/solarsystem.webm" type="video/webm" />
                        </video>
                    </div>
                    <div className='card-bottom'>
                        <div className='card-info'>
                            <p className={videoClass === '' ? 'hidden' : ''}>{Year}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
  )
}

export default MovieCard
