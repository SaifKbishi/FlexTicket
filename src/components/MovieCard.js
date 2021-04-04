import React from 'react';
import '../css/tickets.css';

const MovieCard=(props)=>{
// console.log('5',props.moviePoster);
 return (
  // console.log('5',props.moviePoster),
  <div className="movieContent">
   <div><img className="mdPoster" src={`https://image.tmdb.org/t/p/w500/${props.moviePoster}`} alt="{movie.original_title}"/></div>     
   {/* <div><img className="mdPoster" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="{movie.original_title}"/></div>      */}
   <div className="mdContent">     
    <h1>{props.movieTilte}</h1>
    <p>Duration: {props.movieDuratrion} minutes</p>
    <h3>Overview</h3>
    <p>{props.movieOverview}</p>
   </div>        
  </div>
 );
}

export default MovieCard;