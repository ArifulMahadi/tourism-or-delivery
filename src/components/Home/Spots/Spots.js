import React, { useEffect, useState } from 'react';
import Spot from './Spot/Spot';
import './Spots.css'

const Spots = () => {
    const [spots, setSpots] = useState([])
    useEffect( () => {
        fetch("https://cryptic-lake-43440.herokuapp.com/tickets")
        .then(res => res.json())
        .then(data => setSpots(data))
    } , [])
    return (
           <div className='spots-container'>
               <div className="heading">
                   <h1>Our Tourism place</h1>
               </div>
                <div className='spots-container'>
                {
                    spots.map(spot => <Spot
                         key={spot.id}
                         spot={spot}
                         ></Spot>
                         )
                }
            </div>
           </div>
    
    );
};

export default Spots;