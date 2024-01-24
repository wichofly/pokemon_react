import Rating from '@mui/material/Rating';
import { useState } from 'react';

const RatingDemo = () => {
  const [score, setScore] = useState(3);

  return (
    <div>
      <h2>Rating Demo: {score}</h2>
      <Rating
        name="simple-controlled"
        value={score}
        onChange={(event, newValue) => {
          setScore(newValue);
        }}
      />
    </div>
  );
};

export default RatingDemo;
