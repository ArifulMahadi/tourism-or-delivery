import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useFirebase/useAuth';
import useTickets from '../../Hooks/UseTickets/UseTickets';
import Booking from '../Booking/Booking';
import './Shipping.css';

const Shipping = () => {
    const { register, handleSubmit,reset, watch, formState: { errors } } = useForm();
    const {users} = useAuth()
    
  const onSubmit = data => {
       const savedBooking = useTickets;
       data.order = savedBooking;
       
       fetch('https://cryptic-lake-43440.herokuapp.com/order', {
            method: 'POST',
            headers:{
                'content-type':'application/json',
            },
            body: JSON.stringify(data)
       })
       .then(res => res.json())
       .then(result => {
           if(result.insertedId){
                alert('order processed successfully, thank you')
                reset()
           }
       })
       
 };


    return (
        <div className='shipping-form'>
        <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={users.displayName} {...register("name")} />
                <input defaultValue={users.email} {...register("email", { required: true })} />
                <input defaultValue="" {...register("phone")} />
                <input defaultValue="" {...register("adress")} />
                <input defaultValue="" {...register("city")} />
                {errors.email && <span className="error">This field is required</span>}
                <input className='button' type="submit" />
        </form>
        </div>
    );
};
export default Shipping;