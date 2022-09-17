import React from 'react';
import "./MovieCard.scss"
const MovieCard = ({ data }) => {
    const {Title, Year, imdbID, Type, Poster} = data
    return (
        <div className='card-item'>
            <div className='card-inner'>
                <div className='card-top'>
                    <img src={Poster}/>
                </div>
                <div className='card-bottom'>
                    <div className='card-info'>
                        <h4>{Title}</h4>
                        <p>{Year}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;

{/*keys ['Title', 'Year', 'imdbID', 'Type', 'Poster']*/}