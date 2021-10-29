import React from 'react';
import img from '../images/notfound.jpg'
import './NotFound.css'
const NotFound = () => {
    return (
        <div className='notfound'>
            <img src={img} />
        </div>
    );
};

export default NotFound;