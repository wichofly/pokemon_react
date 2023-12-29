import { useState } from 'react';
import './Colorbox.css';

const getColor = (arr) => {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
};

const ColorBox = ({ colors, index }) => {
  const [color, setColor] = useState(getColor(colors));

  const changeColor = () => {
    const randomColor = getColor(colors);
    setColor(randomColor);
  };

  return (
    <div
      className="colorBox"
      onClick={changeColor}
      style={{
        backgroundColor: color,
      }}
      key={index}
    ></div>
  );
};

export default ColorBox;
