import React, { useState } from 'react';
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
  });

  const handleGridClick = (id) => {
    const newStates = { ...gridStates };
    newStates[`g${id}`] = true;
    setGridStates(newStates);
  };

  const handleclick9 = () => {
    for (let i = 1; i <= 8; i++) {
      setTimeout(() => {
        setGridStates((prevState) => ({
          ...prevState,
          [`g${i}`]: false,
        }));
      }, i * 500); 
    }
  };

  return (
    <div className='gridContainer mx-4'>
      <div className='inner-cont'>
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
        ></div>
      </div>
    </div>
  );
};

export default Grid;
