import React from 'react';
import '../css/tickets.css';

const Input=(props)=>{
 //console.log(props)

  return (
    console.log(props),   
   <div className="Input">
    
   </div>   
  );
}

export default Input;

{/* 
 <input 
  type="text" 
  placeholder="First name" 
  {...register("firstName", { required: true, minLength:2, maxLength: 20 })}/>
  
 <span 
  className="formError">
  {errors.firstName && "First name is required"}
 </span> 
*/}