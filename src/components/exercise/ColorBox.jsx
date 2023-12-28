import { useState } from 'react';
import './Colorbox.css';

const ColorBox = ({ colors }) => {
  const [color, setColor] = useState('brown');

  const changeColor = () => {
    const idx = Math.floor(Math.random() * colors.length);
    const randomColor = colors[idx];
    setColor(randomColor);
  };

  return (
    <div
      className="colorBox"
      onClick={changeColor}
      style={{
        backgroundColor: color,
      }}
    ></div>
  );
};

export default ColorBox;
