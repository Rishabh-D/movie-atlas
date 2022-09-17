import React from 'react';
import { Link } from 'react-router-dom'
import userImg from '../../images/user.png'
import './Header.scss'
const Header = () => {
    return (
        <div className="header">
            <Link to="/"><div className='logo'>Movie App</div></Link>
            <div>
                <img src={userImg} className="user-image" alt="user-img"></img>
            </div>
            
        </div>
    );
};

export default Header;