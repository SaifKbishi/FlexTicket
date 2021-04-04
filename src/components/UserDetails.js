// import React, {useState, useEffect} from 'react';
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
    <span className="formError">{errors.firstName && "First name is required"}</span>
    <input type="text" placeholder="Last name" name="lastname" {...register("lastname", { required: true, minLength:2, maxLength: 20 })}/>
    <span className="formError">{errors.lastname && "Last name is required"}</span>
    <input type="text" placeholder="E-mail" name="email" {...register("email", { required: true})}/>
    <span className="formError">{errors.email && "E-mail is required to send you confirmation"}</span>
    <input type="number" placeholder="Cell Phone" name="cellphone" {...register("cellphone", { required: true})}/>
    <span className="formError">{errors.cellphone && "Cell Phone is required"}</span>
    <label for="birthday">Birthday:  </label>
    <input type="date" placeholder="Birthday" name="birthday" {...register("birthday", { required: true})}/>
    <span className="formError">{errors.birthday && "Birthday is required"}</span>
    <hr/>
    <input type="number" placeholder="ID" name="ID" {...register("id", { required: true})}/>
    <span className="formError">{errors.id && "ID is required"}</span>
    <input type="number" placeholder="CC number" name="CC" {...register("CCnumber", { required: true, minLength:16, maxLength: 16})}/>
    <span className="formError">{errors.CCnumber && "CC is required"}</span>
    <input type="text" placeholder="CVV" name="cvv" {...register("CVV", { required: true, minLength:3, maxLength: 3})}/>
    <span className="formError">{errors.CVV && "CVV is required"}</span>

    <label for="epxDate">Expiry Date: </label>
    <input type="date" placeholder="Exp. Date" name="epxDate" {...register("epxDate", { required: true})}/>
    <span className="formError">{errors.epxDate && "Exp. Date is required"}</span>
    
    <br/>
    <input type="submit"/>
   </form>

  </div>
  );
}

export default UserDetails;