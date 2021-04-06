// import React, {useState, useEffect} from 'react';
import { useForm } from 'react-hook-form';
import {Link} from 'react-router-dom';
import Input from './Input';
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
    <Input 
      inputType="text"
      placeholder="First name"
      register={'...register("firstName", { required: true, minLength:2, maxLength: 20 })'}
      errField={errors.firstName}
      errMsg="First name is required"
    />
    <Input 
      inputType="text"
      placeholder="Last name"
      register={'...register("lastname", { required: true, minLength:2, maxLength: 20 })'}
      errField={errors.lastname}
      errMsg="Last name is required"
    />
    <Input 
      inputType="text"
      placeholder="E-mail"
      register={'...register("email", { required: true})'}
      errField={errors.email}
      errMsg="E-mail is required to send you confirmation"
    />
    <Input 
      inputType="number"
      placeholder="Cell Phone"
      register={'...register("cellphone", { required: true})'}
      errField={errors.cellphone}
      errMsg="Cell Phone is required"
    />
    <label htmlFor="birthday">Birthday:  </label> 
    <Input 
      inputType="date"
      placeholder="Birthday"
      register={'...register("birthday", { required: true})'}
      errField={errors.birthday}
      errMsg="Birthday is required"
    />
    <hr/>
    <Input 
      inputType="number"
      placeholder="ID"
      register={'...register("birthday", { required: true})'}
      errField={errors.birthday}
      errMsg="ID is required"
    />    
    <Input 
      inputType="number"
      placeholder="CC number"
      register={'...register("CCnumber", { required: true, minLength:16, maxLength: 16})'}
      errField={errors.CCnumber}
      errMsg="CC is required and must be 16 digits"
    /> 
    <Input 
      inputType="number"
      placeholder="CVV 3 digits"
      register={'...register("CVV", { required: true, minLength:3, maxLength: 3})'}
      errField={errors.CVV}
      errMsg="CVV is required, must be 3 digits"
    />
    <label htmlFor="epxDate">Expiry Date: </label>
    <Input 
      inputType="date"
      placeholder="Exp. Date"
      register={'...register("epxDate", { required: true})'}
      errField={errors.epxDate}
      errMsg="Exp. Date is required"
    /> 

    {/* <input type="text" placeholder="First name" {...register("firstName", { required: true, minLength:2, maxLength: 20 })}/>
    <span className="formError">{errors.firstName && "First name is required"}</span>
    <input type="text" placeholder="Last name" name="lastname" {...register("lastname", { required: true, minLength:2, maxLength: 20 })}/>
    <span className="formError">{errors.lastname && "Last name is required"}</span>
    <input type="text" placeholder="E-mail" name="email" {...register("email", { required: true})}/>
    <span className="formError">{errors.email && "E-mail is required to send you confirmation"}</span>
    <input type="number" placeholder="Cell Phone" name="cellphone" {...register("cellphone", { required: true})}/>
    <span className="formError">{errors.cellphone && "Cell Phone is required"}</span>
    <label htmlFor="birthday">Birthday:  </label> 
    <input type="date" placeholder="Birthday" name="birthday" {...register("birthday", { required: true})}/>
    <span className="formError">{errors.birthday && "Birthday is required"}</span>
    <input type="number" placeholder="ID" name="ID" {...register("id", { required: true})}/>
    <span className="formError">{errors.id && "ID is required"}</span>
    <input type="number" placeholder="CC number" name="CC" {...register("CCnumber", { required: true, minLength:16, maxLength: 16})}/>
    <span className="formError">{errors.CCnumber && "CC is required and must be 16 digits"}</span>
    <input type="text" placeholder="CVV 3 digits" name="cvv" {...register("CVV", { required: true, minLength:3, maxLength: 3})}/>
    <span className="formError">{errors.CVV && "CVV is required, must be 3 digits"}</span>
    <label htmlFor="epxDate">Expiry Date: </label>
    <input type="date" placeholder="Exp. Date" name="epxDate" {...register("epxDate", { required: true})}/>
    <span className="formError">{errors.epxDate && "Exp. Date is required"}</span> */}
    
    <br/>

      <input type="submit"/>

    <Link to="/Confirmation">
      <input type="submit"/>
    </Link>
   </form>

  </div>
  );
}

export default UserDetails;
