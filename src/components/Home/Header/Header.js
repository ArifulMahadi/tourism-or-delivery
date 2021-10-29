import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    return (
        <div className='header-container'>

            <div className='header'>
                <h1>Hello World</h1>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/home">More Info</Link>
            </div>

        </div>
           
       
    );
};

export default Header;