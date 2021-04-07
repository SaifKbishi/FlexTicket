import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import '../css/tickets.css';

const Confirmation = () => {
  const [seats, setSeats] = useState([]);

  useEffect(() => {
    let cBasket = JSON.parse(localStorage.getItem('basket')) ||[];
    console.log(cBasket)
    setSeats(cBasket);
  }, []);

  return (
   document.title="FlexTickets - Confirmation",
   <div className="ConfirmationLetter" >
   <h2>Sale Confirmation</h2>
   <p>Thank you for your purchase from our site<br/> your purchase details are below:<br/> </p>
   <br/>
   {seats.map((seat)=>{
     return(
       <span>
         <p key={seat.id}>Row: {seat.row} Seat: {seat.seatNumber} /  Price: {seat.price} ILS</p>
       </span>
     );
   })}

 
   <Link to="/movies">
      <input type="submit">Countinue shopping</input>
    </Link>
  </div>
  );
}

export default Confirmation;