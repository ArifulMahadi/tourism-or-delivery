import React from 'react';
import { useParams } from 'react-router';
import './Booking.css'

const Booking = () => {
    const {serviceId} = useParams()
    return (
        <div>
            <h4>booking {serviceId}</h4>
        </div>
    );
};

export default Booking;