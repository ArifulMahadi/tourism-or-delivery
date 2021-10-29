import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useFirebase/useAuth';
import "./Header.css";

const Header = () => {
    const {users,logOut} = useAuth()
    return (
        <div className='header-container'>

            <div className='header'>
                <h1>Hello World</h1>
                <Link to="/home">Home</Link>
                <Link to="/booking">My Booking</Link>
               { users?.email?
               <button onClick={logOut} style={{border:"none",backgroundColor:"black",color:'pink',fontSize:'20px'}}>Logout</button>:
                <Link to="/login">Login</Link>}
                <h4 style={{color:'pink',marginTop:'5px'}}>Login as:{users?.displayName }</h4>
            </div>

        </div>
           
       
    );
};

export default Header;