import React from 'react';
import { Link } from 'react-router-dom';
import './Spot.css'

const Spot = (props) => {
    const {id,img, description , name} = props.spot
    return (
        <div className='spot-container'>
            <div className='spot-img'>
            <img src={img}/>
            </div>
            <divn className='details'>
            <h2>{name}</h2>
            <p>{description}</p>
            </divn>
            <Link to={`/booking/${id}`}>
            <button style={{width:"100%",color:'pink',backgroundColor:"black",padding:'10px 0px',borderRadius:"10px"}}>book {name}</button>
            </Link>
        </div>
    );
};

export default Spot;
