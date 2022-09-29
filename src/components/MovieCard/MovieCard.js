import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import "./MovieCard.scss"


const MovieCard = ({ data }) => {
    const {Title, Year, imdbID, Type, Poster} = data
    // console.log("card is printed",data)
    const [videoClass, setVideoClass] = useState("hidden")
    console.log(videoClass)
    return (
        <div className='card-item'>
            <Link to={`/movie/${imdbID}`}>
                <div className='card-inner'>
                    <div className='card-top' onMouseEnter = {()=> setVideoClass("")} onMouseLeave={()=> setVideoClass("hidden")}>
                        <img className = {videoClass===""? "hidden" : ""}src={Poster}/>
                        <video className={videoClass} disableRemotePlayback autoPlay muted playsInline loop width="100%" height="auto">
                            <source src="https://file-examples.com/storage/fe4658769b6331540b05587/2020/03/file_example_WEBM_480_900KB.webm" type="video/webm" />
                        </video>
                    </div>
                    <div className='card-bottom'>
                        <div className='card-info'>
                            {/* <h4>{Title}</h4> */}
                            <p>{Year}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default MovieCard;

{/*keys ['Title', 'Year', 'imdbID', 'Type', 'Poster']*/}