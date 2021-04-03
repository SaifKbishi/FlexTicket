import React, {useState, useEffect} from 'react';
import axios from 'axios'; 
import Card from './Card';
import GenresCarousel from './GenresCarousel';

import '../css/tickets.css';

const HomePage = () => {
 const [results, setResults] = useState([]); 
 useEffect(() => {
  console.log('i only run once');

  const moviesFetch = async ()=>{
   const {data} = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=b1bbf2914e46c6c6812473913d2635b4&language=en-US&page=1`);
   setResults(data.results);
  };//moviesFetch function
  moviesFetch();

 }, []);//useEffect

 const renderEvents = results.map((event)=>{
  return(
   <Card
      cardClassName={'card'}
      imgSrc={'https://picsum.photos/200/300'}
      eventTitle={event.title}
      eventId={event.id}
      release_date={event.release_date}
      poster_path={event.poster_path}
     />
  );
 });

  return (
   document.title="Home Page",
   console.log('28',results),
   // console.log('29',results[1].id),
   // console.log('30',results[1].title),
   // console.log('31',results[1].overview),
   // console.log('32',results[1].release_date),
   <div className="eventsContent" >     
    <h1>hello from HomePage, here will go a carusel</h1>
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