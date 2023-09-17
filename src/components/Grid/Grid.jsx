import React, { useState,useEffect } from 'react';
import './Grid.css';

const Grid = () => {
  const [gridStates, setGridStates] = useState({
    g1: false,
    g2: false,
    g3: false,
    g4: false,
    g5: false,
    g6: false,
    g7: false,
    g8: false,
    g9:false,
  });
  const [arr,setArr]=useState([])

  const handleGridClick = (id) => {
    const newStates = { ...gridStates };
    newStates[`g${id}`] = true;
    setGridStates(newStates);
    setArr(prev=>([...prev,id]))
  };
  
  const handleclick9 = () => {
    const newStates = { ...gridStates };
    newStates[`g9`] = true;
    setGridStates(newStates);
    var n=9
    setArr(prev=>([...prev,n]))
    
    setTimeout(()=>{
      for (let i=0;i<arr.length;i++) {
      setTimeout(() => {
        setGridStates((prevState) => ({
          ...prevState,
          [`g${arr[i]}`]: false,
        }));
      }, (i) * 200); 
    }
    setTimeout(() => {
      setGridStates((prevState) => ({
        ...prevState,
        [`g9`]: false,
      }));
    },(arr.length) * 200);
  }
  ,500)
  setArr([])
  };


  return (
    <div className='gridContainer'>
        {Array.from({ length: 8 }, (ele, i) => (
          <div
            className={`grid-item ${i + 1}`}
            
            style={{
              backgroundColor: gridStates[`g${i + 1}`] ? '#7A0000' : '#00407A',
            }}
            onClick={() => handleGridClick(i + 1)}
          ></div>
        ))}
        <div
          className='grid-item last 9'
          onClick={handleclick9}
          style={{
            backgroundColor: gridStates[`g9`] ? '#7A0000' : '#00407A',
          }}

        ></div>
    
    </div>
  );
};

export default Grid;
