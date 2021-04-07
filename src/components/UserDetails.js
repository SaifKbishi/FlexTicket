// import React, {useState, useEffect} from 'react';
import { useForm } from 'react-hook-form';
import {Link} from 'react-router-dom';
import Input from './Input';
import '../css/tickets.css';

const UserDetails = () => {
 const {register, handleSubmit, formState: { errors }} = useForm();

 const onSubmit =(data)=>{
 }
  return (
   document.title="FlexTickets - UserDetails",
   <div className="UserDetails" >     
    hello from UserDetails
   <form onSubmit={handleSubmit(onSubmit)} className="registerForm">
    <Input 
      inputType="text"
      placeholder="First name"
      {...register("firstName", { required: true, minLength:2, maxLength: 20 })}
      errField={errors.firstName}
      errMsg="First name is required"
    />
    <Input 
      inputType="text"
      placeholder="Last name"
      {...register("lastname", { required: true, minLength:2, maxLength: 20 })}
      errField={errors.lastname}
      errMsg="Last name is required"
    />
    <Input 
      inputType="text"
      placeholder="E-mail"
      {...register("email", { required: true})}
      errField={errors.email}
      errMsg="E-mail is required to send you confirmation"
    />
    <Input 
      inputType="number"
      placeholder="Cell Phone"
      {...register("cellphone", { required: true})}
      errField={errors.cellphone}
      errMsg="Cell Phone is required"
    />
    <label htmlFor="birthday">Birthday:  </label> 
    <Input 
      inputType="date"
      placeholder="Birthday"
      {...register("birthday", { required: true})}
      errField={errors.birthday}
      errMsg="Birthday is required"
    />
    <hr/>
    <Input 
      inputType="number"
      placeholder="ID"
     {...register("birthday", { required: true})}
      errField={errors.birthday}
      errMsg="ID is required"
    />    
    <Input 
      inputType="number"
      placeholder="CC number"
     {...register("CCnumber", { required: true, minLength:16, maxLength: 16})}
      errField={errors.CCnumber}
      errMsg="CC is required and must be 16 digits"
    /> 
    <Input 
      inputType="number"
      placeholder="CVV 3 digits"
      {...register("CVV", { required: true, minLength:3, maxLength: 3})}
      errField={errors.CVV}
      errMsg="CVV is required, must be 3 digits"
    />
    <label htmlFor="epxDate">Expiry Date: </label>
    <Input 
      inputType="date"
      placeholder="Exp. Date"
      {...register("epxDate", { required: true})}
      errField={errors.epxDate}
      errMsg="Exp. Date is required"
    />  
    <br/>

      

    <Link to="/Confirmation">
      {/* <input type="submit"/> */}
      <input type="submit"/>
    </Link>
   </form>

  </div>
  );
}

export default UserDetails;
