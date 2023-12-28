import { useState } from 'react';

const face_style = {
  fontSize: '50px',
  cursor: 'pointer',
};

const flex = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '10px',
};

const Toggler = () => {
  const [isHappy, setIsHappy] = useState(true);
  const [count, setCount] = useState(5);

  const toggleIsHappy = () => setIsHappy(!isHappy);

  return (
    <div style={flex}>
      <p onClick={toggleIsHappy} style={face_style}>
        {isHappy ? '😀' : '😥'}
      </p>
      <p>{count}</p>
      <button onClick={() => setCount(count + 5)} style={{ marginTop: '5px' }}>
        More
      </button>
    </div>
  );
};

export default Toggler;
