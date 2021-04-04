import React, {useState, useEffect} from 'react';
import '../css/tickets.css';
import axios from 'axios'; 
// import {Link} from 'react-router-dom'

const GenresCarousel =()=> {
 const [genres, setGenres] = useState([]); 
 useEffect(() => {
  console.log('i only run once');
  
  const genresFetch = async ()=>{
   const {data} = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=b1bbf2914e46c6c6812473913d2635b4&language=en-US`);
   setGenres(data);
   
  };//genresFetch function
  genresFetch();
  
 }, []);//useEffect

  return (
   
  console.log(genres),
   <div>
    hello from GenresCarousel
   </div>
  );
}

export default GenresCarousel;