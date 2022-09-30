import React from 'react';
import { useHistory } from 'react-router-dom';
import "./PageNotFound.scss"
const PageNotFound = () => {
    const history = useHistory()
    return (
        <>
            <div className='pageNotFound'></div>
            {setTimeout(()=>{
                history.replace("/")
            },3000)}
        </>
        
    );
};

export default PageNotFound;