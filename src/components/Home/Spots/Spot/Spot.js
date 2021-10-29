import React from 'react';
import './Spot.css'

const Spot = (props) => {
    const {img, description , name} = props.spot
    return (
        <div className='spot-container'>
            <div className='spot-img'>
            <img src={img}/>
            </div>
            <divn className='details'>
            <h2>{name}</h2>
            <p>{description}</p>
            </divn>
            <button style={{width:"100%",color:'pink',backgroundColor:"black"}}>add to cart</button>
        </div>
    );
};

export default Spot;
