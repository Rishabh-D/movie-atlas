import React, { useEffect }from 'react';
import MovieListing from "../MovieListing/MovieListing"
// removed fetchMovies function
import { useDispatch, useSelector } from 'react-redux';

import { fetchAsyncMovies, fetchAsyncSeries } from '../../features/movies/movieSlice';
import { getSearchText } from '../../features/movies/movieSlice';
const Home = () => {

    const dispatch = useDispatch();
    const searchText = useSelector(getSearchText)
    console.log("featching searchtext", searchText)
    useEffect(() => { 
        dispatch(fetchAsyncMovies(searchText))
        dispatch(fetchAsyncSeries(searchText))
    },[dispatch])

    console.log("runs home")
    return (
        <div className='banner-img'>
            <MovieListing></MovieListing>
        </div>
    );
};

export default Home;