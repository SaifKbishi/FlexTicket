import React, {useEffect} from 'react';
import '../css/tickets.css';
import {Link} from 'react-router-dom'
// const genresURL ='https://api.themoviedb.org/3/discover/movie?api_key=b1bbf2914e46c6c6812473913d2635b4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=';
const GenreCard=(props)=>{
 //console.log(props)

 useEffect(() => {
  

 }, []);//useEffect

  return (
   // console.log(props),
   <Link to={`/${props.genreName}`}>
   <div className="GenreCard">
    {/* <Link to={`${genresURL}${props.key}`}> */}
    
    <div>
     {/* <div><img className={props.imgClass} src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`} alt={props.eventTitle}></img></div> */}     
    </div>
    <div>
     <div className="genreName"><h4>{props.genreName}</h4></div>     
    </div>
    
   </div>
   </Link>
  );
}

export default GenreCard;