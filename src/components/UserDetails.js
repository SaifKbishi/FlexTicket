import React, {useState, useEffect} from 'react';
import { useForm } from 'react-hook-form';
import '../css/tickets.css';

const UserDetails = () => {
 const {register, handleSubmit, formState: { errors }} = useForm();

 const onSubmit =(data)=>{
  console.log(data)
 }
  return (
   document.title="FlexTickets - UserDetails",
   <div className="UserDetails" >     
    hello from UserDetails
   <form onSubmit={handleSubmit(onSubmit)} className="registerForm">
    <input type="text" placeholder="First name" {...register("firstName", { required: true, minLength:2, maxLength: 20 })}/>
    {errors.firstName && "First name is required"}<br/>
    <input type="text" placeholder="Last name" name="lastname" {...register("lastname", { required: true, minLength:2, maxLength: 20 })}/>
    {errors.lastname && "Last name is required"}<br/>
    <input type="text" placeholder="E-mail" name="email" {...register("email", { required: true})}/>
    {errors.email && "E-mail is required to send you confirmation"}<br/>
    <input type="number" placeholder="Cell Phone" name="cellphone" {...register("cellphone", { required: true})}/>
    {errors.cellphone && "Cell Phone is required"}<br/>
    <label for="birthday">Birthday:  </label>
    <input type="date" placeholder="Birthday" name="birthday" {...register("birthday", { required: true})}/>
    {errors.birthday && "Birthday is required"}<br/>    
    <hr/>
    <input type="number" placeholder="ID" name="ID" {...register("id", { required: true})}/><br/>
    <input type="text" placeholder="CC number" name="CC" {...register("CC number", { required: true})}/><br/>
    <input type="text" placeholder="CVV" name="cvv" {...register("CVV", { required: true})}/><br/>
    <label for="epxDate">Expiry Date: </label>
    <input type="date" placeholder="Exp. Date" name="epxDate" {...register("epxDate", { required: true})}/>
    
    <br/><br/>
    <input type="submit"/>
   </form>

  </div>
  );
}

export default UserDetails;