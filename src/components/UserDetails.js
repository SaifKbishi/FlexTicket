import React, {useState, useEffect} from 'react';
import { useForm } from 'react-hook-form';
import '../css/tickets.css';

const UserDetails = () => {
 const {register, handleSubmit, errors} = useForm();

 const onSubmit =(data)=>{
  console.log(data)
 }
  return (
   document.title="FlexTickets - UserDetails",
   <div className="App" >     
    hello from UserDetails
   <form onSubmit={handleSubmit(onSubmit)}>
    <input type="text" placeholder="First name" {...register("firstName", { required: true, minLength:2, maxLength: 20 })}/><br/>
    <input type="text" placeholder="Last name" name="lastname" {...register("lastname", { required: true, minLength:2, maxLength: 20 })}/><br/>
    <input type="text" placeholder="E-mail" name="email" {...register("email", { required: true})}/><br/>
    <input type="number" placeholder="Cell Phone" name="cellphone" {...register("cellphone", { required: true})}/><br/>
    <input type="text" placeholder="Birthdate" name="birthdate" {...register("birthdate", { required: true})}/><br/>
    <input type="text" placeholder="" name=""></input>
    <hr/>
    <input type="number" placeholder="ID" name="ID"/><br/>
    <input type="text" placeholder="CC number" name="CC"/><br/>
    <input type="text" placeholder="CVV" name="cvv"/>
    <input type="text" placeholder="Exp. Date" name="epxDate"/>
    <input type="text" placeholder="Calendar" name=""/>
    <br/><br/>
    <input type="submit"/>
   </form>

  </div>
  );
}

export default UserDetails;