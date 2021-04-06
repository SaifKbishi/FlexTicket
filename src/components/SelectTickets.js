import React, {useEffect, useState} from 'react';
// import Basket from './Basket';
import '../css/tickets.css';
import axios from 'axios';
const baseURL = "https://605b385827f0050017c068d1.mockapi.io/basket/basket";

const SelectTickets = () => {
  let [selected, setSelected] = useState(
    [
      [{id:11, name:1, selected: false, value:50},
       {id:12, name:2, selected: false, value:50}, 
       {id:13, name:3, selected: false, value:50},
       {id:14, name:4, selected: false, value:50},
       {id:15, name:5, selected: false, value:50},
       {id:16, name:6, selected: false, value:50},
       {id:17, name:7, selected: false, value:50},
       {id:18, name:8, selected: false, value:50},
       {id:19, name:9, selected: false, value:50},
       {id:110, name:10, selected: false, value:50}],
      [{id:21, name:1, selected: false, value:45},
       {id:22, name:2, selected: false, value:45},
       {id:23, name:3, selected: false, value:45},
       {id:24, name:4, selected: false, value:45},
       {id:25, name:5, selected: false, value:45},
       {id:26, name:6, selected: false, value:45},
       {id:27, name:7, selected: false, value:45},
       {id:28, name:8, selected: false, value:45},
       {id:29, name:9, selected: false, value:45},
       {id:210, name:10, selected: false, value:45}],
      [{id:31, name:1, selected: false, value:40},
       {id:32, name:2, selected: false, value:40},
       {id:33, name:3, selected: false, value:40},
       {id:34, name:4, selected: false, value:40},
       {id:35, name:5, selected: false, value:40},
       {id:36, name:6, selected: false, value:40},
       {id:37, name:7, selected: false, value:40},
       {id:38, name:8, selected: false, value:40},
       {id:39, name:9, selected: false, value:40},
       {id:310, name:10, selected: false, value:40}],
      [{id:41, name:1, selected: false, value:38},
       {id:42, name:2, selected: false, value:38},
       {id:43, name:3, selected: false, value:38},
       {id:44, name:4, selected: false, value:38},
       {id:45, name:5, selected: false, value:38},
       {id:46, name:6, selected: false, value:38},
       {id:47, name:7, selected: false, value:38},
       {id:48, name:8, selected: false, value:38},
       {id:49, name:9, selected: false, value:38},
       {id:410, name:10, selected: false, value:38}],
      [{id:51, name:1, selected: false, value:35},
       {id:52, name:2, selected: false, value:35},
       {id:53, name:3, selected: false, value:35},
       {id:54, name:4, selected: false, value:35},
       {id:55, name:5, selected: false, value:35},
       {id:56, name:6, selected: false, value:35},
       {id:57, name:7, selected: false, value:35},
       {id:58, name:8, selected: false, value:35},
       {id:59, name:9, selected: false, value:35},
       {id:510, name:10, selected: false, value:35}],
      [{id:61, name:1, selected: false, value:25},
       {id:62, name:2, selected: false, value:25},
       {id:63, name:3, selected: false, value:25},
       {id:64, name:4, selected: false, value:25},
       {id:65, name:5, selected: false, value:25},
       {id:66, name:6, selected: false, value:25},
       {id:67, name:7, selected: false, value:25},
       {id:68, name:8, selected: false, value:25},
       {id:69, name:9, selected: false, value:25},
       {id:610, name:10, selected: false, value:25}],
    ]
  );

  let [takenSeats, setTakenSeats] = useState([]);
  let [total, setTotal] = useState(0);
  let [basket, setBasket] = useState([]);

  const handleSeatSelection = (id,index, sIndex, price)=>{
    console.log('Selected Seat Details: id:',id,' row:',index+1, ' seat:',sIndex+1, ', taken: ',!selected[index][sIndex].selected, 'price:',price,'ILS');

    const newArray = [...selected];
    newArray[index][sIndex].selected = !newArray[index][sIndex].selected;
    if(newArray[index][sIndex].selected) {
      newArray[index][sIndex].className='gray';
    }    
    setSelected(newArray);
    updateBasket(index, sIndex, selected[index][sIndex].selected, price);
    updateLSBasket(id, index, sIndex, selected[index][sIndex].selected, price);    
     
  }//handleSeatSelection
  const updateLSBasket = (id, index, sIndex, isTaken, price)=>{
    let baksetObj ={};
    baksetObj.id = id;
    baksetObj.row = index+1;
    baksetObj.seatNumber = sIndex+1;
    baksetObj.status = isTaken;
    baksetObj.price = price;
    console.log('baksetObj: ',baksetObj);
    
    let arr = basket.concat(baksetObj);
    setBasket(arr)
    // setBasket(currentBasket => ({
    //   ...currentBasket, baksetObj
    // }));
  }  
  useEffect(()=>{
    localStorage.setItem('basket', JSON.stringify(basket))
  }, [basket]);

  const handleRemoveItem = (e, seat,id) => {
    //debugger;
    console.log('88 id',id)
   console.log(e.target.parentNode, 'price');
   e.target.parentNode.remove();
   // setTotal(currentTotal => currentTotal - price);
  
   console.log('seat to remove',seat);
   // const id = e.target.getAttribute("id");
   console.log('95',id);
   // updateBasket(takenSeats.filter(seat => seat.id !== id));
  };//handleRemoveItem

  const updateBasket = (index, sIndex, isTaken, price)=>{
    let row=index+1, seat=sIndex+1;
    // let price= selected[index][sIndex].value;
    console.log('80 ',row, seat, isTaken, price );    
    setTakenSeats([
      ...takenSeats,
      {
        row,
        seat,
        price,
        isTaken
      }
    ]);//setTakenSeats
    if(isTaken){
      setTotal(currentTotal => currentTotal + price);
      console.log(total);
    }else{
      setTotal(currentTotal => currentTotal - price);
      console.log(total);
    }    
  }//updateBasket

  return (
  document.title="Flex - SelectTickets",
  <div className="seatingPlan">
  {selected.map((items, row) => {    
    return (          
      <h4 key={items.id} className="row">
        <span>R{row+1}</span>
        {items.map((seat, sIndex) => {
          return <li key={seat.id} className={'seatNumber '+ (seat.selected? 'gray' : 'blue')} onClick={()=>handleSeatSelection(seat.id, row, sIndex, seat.value)}  data-seat={'Row'+(row+1)+' / Seat'+(sIndex+1)+' '+(seat.selected? 'Taken' : 'Free')+' ' }>{sIndex+1} </li>;
        })}
      </h4>
    );
  })}

  <h5 >Selected seats: {
    takenSeats.map((seat)=>{
      // console.log('134',seat)
      if(seat.isTaken){
       return(
        <>
         <span>
          <p className="basketItem" id={seat.id}>Row:{seat.row} Seat:{seat.seat} /  Price: {seat.price}ILS<span variant="outline-danger" id={seat.seat} onClick={(e, seat,id)=>handleRemoveItem(e, seat,id)}> X</span></p>        
         </span>        
        </>
       );
      }else{
       console.log('should remove the line from the basket')
      }
       
     })
    }</h5>
    <p>subTotal: {total}</p>
    
</div>
  );//return
}//SelectTickets

export default SelectTickets;
