import React from 'react';
import '../css/tickets.css';

const Card=(props)=>{

  return (
   <div className="Card">
    <div>
     <div><img className={props.imgClass} src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`} alt={props.eventTitle}></img></div>
     <div></div>
    </div>
    <div>
     <div className="eventTitle"><h4>{props.eventTitle}</h4></div>
     {/* <div><h4>ID:{props.eventId}</h4></div>      */}
     <div><h5>{props.release_date}</h5></div>
    </div>
   </div>
  );
}

export default Card;