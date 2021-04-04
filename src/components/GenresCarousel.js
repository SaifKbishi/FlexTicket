import React, {useState, useEffect} from 'react';
import '../css/tickets.css';
import axios from 'axios'; 
import GenreCard from './GenreCard';
// import {Link} from 'react-router-dom'

const GenresCarousel =()=> {
 const [genres, setGenres] = useState([]); 
 useEffect(() => {
//   console.log('i only run once GenresCarousel');
  
  const genresFetch = async ()=>{
   const {data} = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=b1bbf2914e46c6c6812473913d2635b4&language=en-US`);
   setGenres(data.genres);   
  };//genresFetch function
  genresFetch();  
 }, []);//useEffect

 const renderGenres= genres.map((genre)=>{
  return (
   <GenreCard
    key={genre.id}
    genreName = {genre.name}
   />
  );
 });//renderGenres

  return (   
   // console.log('20 GenresCarousel',genres),
    <div className="genres">
     {/* hello from GenresCarousel */}
     <div className="genresWrapper">
      {renderGenres}
     </div>
    </div>
   );
}

export default GenresCarousel;