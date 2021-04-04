import React, {useState} from 'react';
import '../css/tickets.css';

const SelectTickets = () => {
  let [selected, setSelected] = useState(
    [
      [{id:1_1, name:1, selected: false, value:50},
       {id:1_2, name:2, selected: false, value:50}, 
       {id:1_3, name:3, selected: false, value:50},
       {id:1_4, name:4, selected: false, value:50},
       {id:1_5, name:5, selected: false, value:50},
       {id:1_6, name:6, selected: false, value:50},
       {id:1_7, name:7, selected: false, value:50},
       {id:1_8, name:8, selected: false, value:50},
       {id:1_9, name:9, selected: false, value:50},
       {id:1_10, name:10, selected: false, value:50}],
      [{id:2_1, name:1, selected: false, value:45},
       {id:2_2, name:2, selected: false, value:45},
       {id:2_3, name:3, selected: false, value:45},
       {id:2_4, name:4, selected: false, value:45},
       {id:2_5, name:5, selected: false, value:45},
       {id:2_6, name:6, selected: false, value:45},
       {id:2_7, name:7, selected: false, value:45},
       {id:2_8, name:8, selected: false, value:45},
       {id:2_9, name:9, selected: false, value:45},
       {id:2_10, name:10, selected: false, value:45}],
      [{id:3_1, name:1, selected: false, value:40},
       {id:3_2, name:2, selected: false, value:40},
       {id:3_3, name:3, selected: false, value:40},
       {id:3_4, name:4, selected: false, value:40},
       {id:3_5, name:5, selected: false, value:40},
       {id:3_6, name:6, selected: false, value:40},
       {id:3_7, name:7, selected: false, value:40},
       {id:3_8, name:8, selected: false, value:40},
       {id:3_9, name:9, selected: false, value:40},
       {id:3_10, name:10, selected: false, value:40}],
      [{id:4_1, name:1, selected: false, value:38},
       {id:4_2, name:2, selected: false, value:38},
       {id:4_3, name:3, selected: false, value:38},
       {id:4_4, name:4, selected: false, value:38},
       {id:4_5, name:5, selected: false, value:38},
       {id:4_6, name:6, selected: false, value:38},
       {id:4_7, name:7, selected: false, value:38},
       {id:4_8, name:8, selected: false, value:38},
       {id:4_9, name:9, selected: false, value:38},
       {id:4_10, name:10, selected: false, value:38}],
      [{id:5_1, name:1, selected: false, value:35},
       {id:5_2, name:2, selected: false, value:35},
       {id:5_3, name:3, selected: false, value:35},
       {id:5_4, name:4, selected: false, value:35},
       {id:5_5, name:5, selected: false, value:35},
       {id:5_6, name:6, selected: false, value:35},
       {id:5_7, name:7, selected: false, value:35},
       {id:5_8, name:8, selected: false, value:35},
       {id:5_9, name:9, selected: false, value:35},
       {id:5_10, name:10, selected: false, value:35}],
      [{id:6_1, name:1, selected: false, value:25},
       {id:6_2, name:2, selected: false, value:25},
       {id:6_3, name:3, selected: false, value:25},
       {id:6_4, name:4, selected: false, value:25},
       {id:6_5, name:5, selected: false, value:25},
       {id:6_6, name:6, selected: false, value:25},
       {id:6_7, name:7, selected: false, value:25},
       {id:6_8, name:8, selected: false, value:25},
       {id:6_9, name:9, selected: false, value:25},
       {id:6_10, name:10, selected: false, value:25}],
    ]
  );
  const handleClick = (id,index, sIndex)=>{
    console.log('id:',id,' row:',index+1, ' seat:',sIndex+1 );
    const newArray = [...selected];
    newArray[index][sIndex].selected = !newArray[index][sIndex].selected;
    if(newArray[index][sIndex].selected) {newArray[index][sIndex].className='gray'}
    setSelected(newArray);
  }

  return (
  document.title="SelectTickets",
  <div className="seatingPlan">
  {selected.map((items, row) => {
    return (          
      <h4 className="row">
        <span>R{row+1}</span>
        {items.map((seat, sIndex) => {
          return <li className={'seatNumber '+ (seat.selected? 'gray' : 'blue')} onClick={()=>handleClick(seat.id, row, sIndex)} data-seat={'Row'+(row+1)+' / Seat'+(sIndex+1)+' '+(seat.selected? 'Taken' : 'Free') }>{sIndex+1} </li>;
        })}
      </h4>
    );
  })}
</div>
  );//return
}//SelectTickets

export default SelectTickets;
