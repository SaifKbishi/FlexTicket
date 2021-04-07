import React, {useEffect, useState} from 'react';
import '../css/tickets.css';
// import axios from 'axios';
const SelectTickets = () => {
  const [selected, setSelected] = useState(
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

  const [takenSeats, setTakenSeats] = useState([]);
  const [total, setTotal] = useState(0);
  const [basket, setBasket] = useState([]);
  const [restore, setRestore] = useState([]);

  const handleSeatSelection = (id,index, sIndex, price)=>{
    console.log('Selected Seat Details: id:',id,' row:',index+1, ' seat:',sIndex+1, ', taken: ',!selected[index][sIndex].selected, 'price:',price,'ILS');
// debugger;
    const newArray = [...selected];
    newArray[index][sIndex].selected = !newArray[index][sIndex].selected;
    if(newArray[index][sIndex].selected) {
      newArray[index][sIndex].className='gray';
    }else{newArray[index][sIndex].className='blue';}
    setSelected(newArray);
    updateBasket(index, sIndex, selected[index][sIndex].selected, price);
    updateLSBasket(id, index, sIndex, selected[index][sIndex].selected, price);     
  }//handleSeatSelection

useEffect(()=>{
  let restore = JSON.parse(localStorage.getItem('basket')) || [];  
  restore = restore.map((elem)=>{
    return elem.id;
  })
  setRestore(restore);
},[]);

  const updateLSBasket = (id, index, sIndex, isTaken, price)=>{
    let baksetObj ={};
    baksetObj.id = id;
    baksetObj.row = index+1;
    baksetObj.seatNumber = sIndex+1;
    baksetObj.status = isTaken;
    baksetObj.price = price;
    setBasket(baksetObj);
    // debugger;
    console.log('baksetObj: ',baksetObj);
    if(baksetObj.status){
      const helper = JSON.parse(localStorage.getItem('basket')) ||[];
      helper.push(baksetObj);
      localStorage.setItem('basket',JSON.stringify(helper));
      console.log('helper 115',helper);
    }else{//add code here 2231
      // debugger;
      const helper2 = JSON.parse(localStorage.getItem('basket')) ||[];
   
      helper2.filter((elem)=>{ 
        console.log('121',helper2);
        let index = helper2.indexOf(elem);
        helper2.splice(index, 1);
        return elem.id !== id 
      });      
      setRestore(helper2);
      localStorage.setItem('basket',JSON.stringify(helper2));
    }
  }  //updateLSBasket

  useEffect(()=>{
   console.log('basket has changed', basket);
   if(basket.status){ //if selected a seat
     console.log('should add this seat to basket');
    const currentBasket = JSON.parse(localStorage.getItem('basket'));
    currentBasket.push(basket); 
   }else{//unselect a seat
    console.log('should Remove this seat from basket.', 'basket: ',basket)
    const currentBasket = JSON.parse(localStorage.getItem('basket')) ||[];
    currentBasket.splice(basket.id, 1);
   }   
  }, [basket]);

   const handleRemoveItem = (e, seat,id) => {
    console.log('88 id',id)
    console.log(e.target.parentNode, 'price');
    e.target.parentNode.remove();
  };//handleRemoveItem

  const updateBasket = (index, sIndex, isTaken, price)=>{
    let row=index+1, seat=sIndex+1;  
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
    // debugger;
    return (
      <h4 key={selected.indexOf(items)} className="row">
        <span>R{row+1}</span>
        {items.map((seat, sIndex) => {
          // return <li key={seat.id} className={'seatNumber '+ (seat.selected? 'gray' : 'blue')} onClick={()=>handleSeatSelection(seat.id, row, sIndex, seat.value)}  data-seat={'Row'+(row+1)+' / Seat'+(sIndex+1)+' '+(seat.selected? 'Taken' : 'Free')+' ' }>{sIndex+1} </li>;
          return <li key={seat.id} className={'seatNumber '+ (restore.includes(seat.id) || seat.selected ? 'gray' : 'blue') } onClick={()=>handleSeatSelection(seat.id, row, sIndex, seat.value)}  data-seat={'Row'+(row+1)+' / Seat'+(sIndex+1)+' '+(seat.selected? 'Taken' : 'Free')+' ' }>{sIndex+1} </li>;
        })}
      </h4>
    );
  })}

  <h5 >Selected seats: {
    takenSeats.map((seat)=>{
      if(seat.isTaken){
       return(
        <>
         <span>
          <p className="basketItem" id={seat.id}>Row:{seat.row} Seat:{seat.seat} /  Price: {seat.price}ILS<span variant="outline-danger" id={seat.seat} onClick={(e, seat,id)=>handleRemoveItem(e, seat,id)}> X</span></p>        
         </span>        
        </>
       );
      }else{
       console.log('should remove the line from the basket');
       return <span> </span>
      }
       
     })
    }</h5>
    <p>subTotal: {total}</p>
    
</div>
  );//return
}//SelectTickets

export default SelectTickets;
