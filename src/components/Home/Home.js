import React, { useEffect }from 'react';
import MovieListing from "../MovieListing/MovieListing"
import  {fetchMovies}  from "../../common/apis/movieApiFunctions"
const Home = () => {

    useEffect(() => {
        const tag ="Harry"
        fetchMovies(tag)
    },[])
    
    console.log("runs home")
    return (
        <div className='banner-img'>
            <MovieListing></MovieListing>
        </div>
    );
};

export default Home;