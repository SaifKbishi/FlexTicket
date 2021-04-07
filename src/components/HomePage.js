import React, {useState, useEffect} from 'react';
import axios from 'axios'; 
import Card from './Card';
import GenresCarousel from './GenresCarousel';
import {Link} from 'react-router-dom'
import '../css/tickets.css';

const HomePage = () => {
 const [results, setResults] = useState([]);
 useEffect(() => {
  console.log('i only run once from homepage');

  const moviesFetch = async ()=>{
   const {data} = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=b1bbf2914e46c6c6812473913d2635b4&language=en-US&page=1`);
   setResults(data.results);
  };//moviesFetch function
  moviesFetch();

 }, []);//useEffect

 const renderEvents = results.map((event)=>{
  // let tilte= encodeURI(`${event.title}`);
  return(   
   // <Link to={`/movies/${tilte}`}>
   <Link key={event.id} to={`/movies/${event.id}`}>
   <Card key={event.id}
    eventTitle={event.title}
    eventId={event.id}
    release_date={event.release_date}
    poster_path={event.poster_path}
   />   
   </Link>
  );
 });

  return (
   document.title="FlexTickets - Home Page",
   // console.log('28',results),
   <div className="eventsContent" >     
    {/* <h1>hello from HomePage, here will go a carusel</h1> */}
    <GenresCarousel/>
    <br/>
    <div className="cardsWrapper">
    {renderEvents}    
    </div>
    {/* *************** */}
    
    {/* *************** */}
    
    <button>Add to basket</button>
    
   </div>
  );//
}

export default HomePage;