import React from 'react';
import {recommendations} from "../../common/apis/RecommendedShows"
import MovieCard from '../MovieCard/MovieCard';
import Slider from "react-slick";
import {Settings} from "../../common/settings.js"
import "./Recommend.scss"
const Recommend = () => {

    const shows = recommendations.map(show => {
        return <MovieCard key={show.id} data={show}></MovieCard>
    })

    return (
        <div>
            <Slider {...Settings}>{shows}</Slider>

            
            {/* <img src={`images/slide1.jpg`} /> */}
        </div>
    );
};

export default Recommend;