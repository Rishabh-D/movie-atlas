import React, { useEffect }from 'react';
import MovieListing from "../MovieListing/MovieListing"
import  {fetchMovies}  from "../../common/apis/movieApiFunctions"
import { useDispatch } from 'react-redux';
// removed addMovies function
import { fetchAsyncMovies } from '../../features/movies/movieSlice';

const Home = () => {

    const dispatch = useDispatch();
    useEffect(() => { 
        dispatch(fetchAsyncMovies())
    },[dispatch])

    console.log("runs home")
    return (
        <div className='banner-img'>
            <MovieListing></MovieListing>
        </div>
    );
};

export default Home;