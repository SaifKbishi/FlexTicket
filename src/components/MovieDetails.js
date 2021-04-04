import React, {useState, useEffect} from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
// import {Link} from 'react-router-dom'
import '../css/tickets.css';

const MovieDetails = () => {
 const [movie, setMovie] = useState([]); 
 useEffect(() => {
  console.log('i only run once from MovieDetails');

  const moviesFetch = async ()=>{
   const {data} = await axios.get(`https://api.themoviedb.org/3/movie/520946?api_key=b1bbf2914e46c6c6812473913d2635b4&language=en-US`);
   setMovie(data);
  };//moviesFetch function
  moviesFetch();

 }, []);//useEffect

  /**
   * need to add more details on the movies
   * {movie.genres.forEach(genre => <h6>{genre.name}</h6>)}
   */

  return (
   document.title="FlexTickets - a movie",
   console.log('23',movie),
   console.log('23',movie.genres),
   <div className="movieContent">
     <MovieCard 
      moviePoster={movie.poster_path}
      movieTilte={movie.original_title}
      movieDuratrion={movie.runtime}
      movieOverview={movie.overview}
     />
   </div>
   // <div className="movieContent">
   //   <div><img className="mdPoster" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="{movie.original_title}"/></div>     
   //   {/* <div><img className="mdPoster" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="{movie.original_title}"/></div>      */}
   //   <div className="mdContent">     
   //    <h1>{movie.original_title}</h1>
   //    <p>Duration: {movie.runtime} minutes</p> 
      
   //    <h3>Overview</h3>
   //    <p>{movie.overview}</p>
      
   //   </div>        
   // </div>
  );//
}

export default MovieDetails;

{/* <div></div> */}