import React, {useState} from 'react';
import '../css/tickets.css';

const SelectTickets = () => {
  let [selected, setSelected] = useState(
    [
      {id:1_1, name:1, selected: false, value:50},
      {id:1_2, name:2, selected: false, value:50},
      {id:1_3, name:3, selected: false, value:50},
      {id:1_4, name:4, selected: false, value:50},
      {id:1_5, name:5, selected: false, value:50},
    ],[
      {id:2_1, name:1, selected: false, value:45},
      {id:2_2, name:2, selected: false, value:45},
      {id:2_3, name:3, selected: false, value:45},
      {id:2_4, name:4, selected: false, value:45},
      {id:2_5, name:5, selected: false, value:45},
    ],[
      {id:3_1, name:1, selected: false, value:40},
      {id:3_2, name:2, selected: false, value:40},
      {id:3_3, name:3, selected: false, value:40},
      {id:3_4, name:4, selected: false, value:40},
      {id:3_5, name:5, selected: false, value:40},
    ]
  );

  const handleClick = (id)=>{
    console.log('seat#: ', id, ', is selected:', );
    const index = selected.findIndex((elem)=>elem.id ===id); //return the index of the clicked element that has the id
    const newArr = [...selected];
    newArr[index].selected = !newArr[index].selected
    setSelected(newArr);  
   }

  return (
  document.title="SelectTickets",
  <div className="seatingPlanApp">
    hello from SelectTickets
    <br/><br/>
    <div>{
      selected.map((row,index)=>{
        return(          
          <ol>
            {row.map((seat, seatIndex)=>{
              return <li>{seat.name}</li>
            })}
          </ol>
        );
        // return <span onClick={()=>handleClick(seat.id)} className="seatNumber">{seat.name}</span>
      })
      }
    </div>
    <br/>


    
  </div>
  );//return
}

export default SelectTickets;


// {
//   selected.map((seat)=>{
//     return <span onClick={()=>handleClick(seat.id)} className="seatNumber">{seat.name}</span>
//   })
//   }