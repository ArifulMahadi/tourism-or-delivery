import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import './Booking.css'

const Booking = () => {
    const { serviceId } = useParams()
    const [books, setBooks] = useState([])
    useEffect( () => {
            fetch('https://cryptic-lake-43440.herokuapp.com/tickets')
            .then(res => res.json())
            .then (data =>setBooks(data))
    } ,[])

    const matchingBooks = books.find(book => book.id = parseInt(serviceId));
    const {id, name, description, img} = matchingBooks || {};
    console.log(name);
    
    
    return (
     <div className='booking-container'>        
           <div className="booking-item">
                <img src={img} alt=""/>
                <h1>{name}</h1>
                <p>{description}</p>
               <Link to="/shipping">
                    <button style={{border:"none", backgroundColor:"black",color:"pink",padding:"15px 30px",borderRadius:"10px"}}>Order Now</button>
               </Link>
           </div>                
     </div>
    );
};

export default Booking;