import React, { useEffect }from 'react';
import MovieListing from "../MovieListing/MovieListing"
// removed fetchMovies function
import { useDispatch, useSelector } from 'react-redux';

import { fetchAsyncMovies, fetchAsyncSeries } from '../../features/movies/movieSlice';
import { getSearchText } from '../../features/movies/movieSlice';
import { type } from '@testing-library/user-event/dist/type';
import toast, { Toaster } from 'react-hot-toast';
const Home = () => {

    // const dispatch = useDispatch();
    const searchText = useSelector(getSearchText)

    console.log("featching searchtext", searchText, typeof(searchText))
    // useEffect(() => { 
    //     dispatch(fetchAsyncMovies(searchText))
    //     dispatch(fetchAsyncSeries(searchText))
    // },[dispatch])

    console.log("runs home","searchText",searchText)
    return (
        <>
            
            { searchText==="" ? 
                (

                    <h2>Search space empty</h2>
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