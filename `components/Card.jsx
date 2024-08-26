import React, { useState } from 'react';

const Cate = [
  {
    title: 'Clock',
    category: 'productive',
    txt: 'Wgdt-1'
  },
  {
    title: 'Calender',
    category: 'productive',
    txt: 'Wgdt-2'
  },
  {
    title: 'Sticky Note',
    category: 'productive',
    txt: 'Wgdt-3'
  },
  {
    title: 'Classroom',
    category: 'productive',
    txt: 'Wgdt-4'
  }
];

const CardStruct = ({ title, txt }) => {
  const [showButton, setShowButton] = useState(true);
  const [showText, setShowText] = useState(false);

  const handleAddWidget = () => {
    setShowButton(false);
    setShowText(true);
  };

  return (
    
    <div style={{ 
      backgroundColor: '#fff', 
      padding: '10px', 
      border: '1px solid #ddd', 
      borderRadius: '10px', 
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' 
    }}>
      <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>
        <p>{title}</p>
      </div>
      {showButton && (
        <button 
          onClick={handleAddWidget} 
          style={{ 
            backgroundColor: '#4CAF50', 
            color: '#fff', 
            padding: '10px 20px', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer' 
          }}
        >
          Add Widget
        </button>
      )}
      {showText && <p>{txt}</p>}
    </div>
  );
};

const Card = () => {
  return (
    <div style={{alignItems:'center'}}>
        <div style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        gap: '50px', 
        
        }}>
        {Cate.map((item) => (
            <CardStruct key={item.title} title={item.title} txt={item.txt} />
        ))}
        </div>
    </div>
  );
};

export default Card;
