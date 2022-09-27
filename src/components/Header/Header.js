import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { fetchAsyncMovies, fetchAsyncSeries, setSearchText } from '../../features/movies/movieSlice';
import userImg from "../../images/linkedins.png";
import './Header.scss'
import toast, {Toaster} from 'react-hot-toast';

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
                <Toaster
                    containerStyle={{
                        top: 72,
                        left: 20,
                        bottom: 20,
                        right: 20,
                      }}
                />
                <a href="https://www.linkedin.com/in/rishabh-dubey-bb6624140/" target="_blank">
                <img 
                    onMouseOver = {
                        () => (
                            toast('Click to connect with me.', 
                                {
                                    position: "top-right",
                                    icon:"😄",
                                    duration:2000
                                
                                }
                                )
                            )
                        } 
                    src={userImg} 
                    className="user-image"
                    alt="user-img" 
                    style={{backgroundColor:"#1a242f"}}></img>   
                </a>
            </div>
        </div>
    );
};

export default Header;