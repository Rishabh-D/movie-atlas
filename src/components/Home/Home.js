import React, { useEffect }from 'react';
import MovieListing from "../MovieListing/MovieListing"
import  {fetchMovies}  from "../../common/apis/movieApiFunctions"
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/movieSlice';

const Home = () => {
    const dispatch = useDispatch();
    const tag ="Harry"

    useEffect(() => { 
        //fetchMovie is a async function and return promise
        fetchMovies(tag).then((data)=>{
            console.log(data)
            dispatch(addMovies(data))
        })
    },[])

    console.log("runs home")
    return (
        <div className='banner-img'>
            <MovieListing></MovieListing>
        </div>
    );
};

export default Home;