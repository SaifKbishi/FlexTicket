import React, {useEffect} from 'react';
import '../css/tickets.css';
// import {Link} from 'react-router-dom'

const GenreCard=(props)=>{
 //console.log(props)

 useEffect(() => {
  // console.log('i only run once');
  // console.log(props);

 }, []);//useEffect

  return (
   // console.log(props),
   <div className="GenreCard">
    <div>
     {/* <div><img className={props.imgClass} src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`} alt={props.eventTitle}></img></div> */}     
    </div>
    <div>
     <div className="genreName"><h4>{props.genreName}</h4></div>     
    </div>
   </div>
  );
}

export default GenreCard;