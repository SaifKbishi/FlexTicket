import React from 'react';
import '../css/tickets.css';

const Input=(props)=>{
 console.log(props)

  return (
    //console.log(props),
    <span>
      <input type={props.inputType}
        placeholder={props.placeholder}
        registerObj={props.register}
      />
      <span className="formError">
       {props.errField && props.errMsg }
      </span> 
    </span>
  );
}

export default Input;
