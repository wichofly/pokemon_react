import { useState } from 'react';

const face_style = {
  fontSize: '50px',
  cursor: 'pointer',
};

const Toggler = () => {
  const [isHappy, setIsHappy] = useState(true);

  const toggleIsHappy = () => setIsHappy(!isHappy);

  return (
    <div style={{ marginTop: '20px' }}>
      <p onClick={toggleIsHappy} style={face_style}>
        {isHappy ? '😀' : '😥'}
      </p>
    </div>
  );
};

export default Toggler;
