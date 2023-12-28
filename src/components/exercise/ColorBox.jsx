import { useState } from 'react';
import './Colorbox.css';

const ColorBox = () => {
  const [color, setColor] = useState('brown');
  
  return (
    <div
      className="colorBox"
      style={{
        backgroundColor: color,
      }}
    ></div>
  );
};

export default ColorBox;
