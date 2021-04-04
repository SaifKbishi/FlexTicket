import React, {useState, useEffect} from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import SelectTickets from './SelectTickets';
import '../css/tickets.css';

const MovieDetails = ({match}) => {
 const [movie, setMovie] = useState([]); 
 useEffect(() => {
  console.log('i only run once from MovieDetails');
  console.log('10 match',match)

  const moviesFetch = async ()=>{
   const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=b1bbf2914e46c6c6812473913d2635b4&language=en-US`);
   setMovie(data);
  };//moviesFetch function
  moviesFetch();
 }, []);//useEffect
  /**
   * need to add more details on the movies
   * {movie.genres.forEach(genre => <h6>{genre.name}</h6>)}
   */
  return (
   document.title=`FlexTickets - ${movie.original_title}`,
   <div>
    <div className="movieContent">
    <MovieCard 
      moviePoster={movie.poster_path}
      movieTilte={movie.original_title}
      movieDuratrion={movie.runtime}
      movieOverview={movie.overview}
    />    
    </div>
    <hr/>
    <SelectTickets />
   </div>   
  );//return
}
export default MovieDetails;

{/* <div></div> */}