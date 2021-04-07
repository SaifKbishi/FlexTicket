import React, {useState, useEffect} from 'react';
import '../css/tickets.css';

const Basket = () => {
  
  // useEffect(()=>{
  //   localStorage.setItem('basket', JSON.stringify(basket))
  // }, [basket]);
  const data = JSON.parse(localStorage.getItem('basket'))

  return (
   document.title="FlexTickets - Basket",
   <div className="App" >     
   hello from Basket
   
 
  </div>
  );
}

export default Basket;