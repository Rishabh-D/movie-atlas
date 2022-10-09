import React from 'react'
import './Footer.scss'
import userImg from '../../images/github.png'
import toast, { Toaster } from 'react-hot-toast'
const Footer = () => {
  const displayToast = (e) => {
    const message = 'View source code'
    if (e.target.name === 'git') {
      toast(message,
        {
          icon: '😄',
          position: 'bottom-center',
          duration: 2000,
          style: {
            borderRadius: '10px',
            background: '#0f171e',
            color: '#fff'
          }
        }
      )
    }
  }

  return (
        <div className='footer'>
            <Toaster
                    containerStyle={{
                      top: 72,
                      left: 20,
                      bottom: 20,
                      right: 20
                    }}
                />
            <div className="title">
                <div>Movie App</div>

                <a
                    name="git"
                    href="https://github.com/Rishabh-D/movie-app"
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter = {(e) => displayToast(e)}
                >
                    <img
                        src={userImg}
                        className="user-image"
                        alt="user-img"
                        style={{ backgroundColor: 'white', borderRadius: '50%' }}>
                    </img>
                </a>

            </div>
            <div>©2022, Movie, Inc. or its affiliates</div>
        </div>
  )
}

export default Footer
