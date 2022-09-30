import React, { useEffect }from 'react';
import MovieListing from "../MovieListing/MovieListing"
// removed fetchMovies function
import { useDispatch, useSelector } from 'react-redux';

import { fetchAsyncMovies, fetchAsyncSeries } from '../../features/movies/movieSlice';
import { getSearchText } from '../../features/movies/movieSlice';
import { type } from '@testing-library/user-event/dist/type';
import toast, { Toaster } from 'react-hot-toast';
import { useHistory } from 'react-router-dom';
const Home = () => {

    // const dispatch = useDispatch();
    const history = useHistory()
    const searchText = useSelector(getSearchText)

    // console.log("featching searchtext", searchText, typeof(searchText))
    
    // console.log("runs home","searchText",searchText)
    return (
        <>
            { searchText==="" ? 
                (
                    history.replace("/")   
                )
            
                :
                (
                    <div className='banner-img'>
                        <MovieListing searchText={searchText}></MovieListing>
                    </div>
                )
            } 
        </>   
    );
};

export default Home;