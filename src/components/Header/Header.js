import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { fetchAsyncMovies, fetchAsyncSeries, setSearchText } from '../../features/movies/movieSlice';
import userImg from '../../images/user.png'
import './Header.scss'


const Header = () => {
    const [term, setTerm] = useState("")
    const dispatch = useDispatch()
    let history = useHistory();
    const submitHandler=(e)=>{
        e.preventDefault();
        console.log("search")
        dispatch(fetchAsyncMovies(term))
        dispatch(fetchAsyncSeries(term))
        dispatch(setSearchText(term))
        // setTerm("")
        history.push("/home")


    }
    return (
        <div className="header">
            <Link to="/"><div className='logo'>Movie App</div></Link>

            <div className="search-bar">
                <form disabled onSubmit={submitHandler}>
                    <input type="text"
                            value={term}
                            placeholder="search movies or series"
                            onChange={(e)=>setTerm(e.target.value)}
                    />
                    
                        <button type="submit">
                        <i className='fa fa-search'></i>
                        </button>
                    
                </form>
            </div>

            <div>
                <img src={userImg} className="user-image" alt="user-img"></img>
            </div>
        </div>
    );
};

export default Header;