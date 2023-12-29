import { useState } from 'react';
import { getRolls } from './utils';

import Dice from './Dice';

const LuckyN = ({ numDice = 2, goal = 7 }) => {
  const [dado, setDado] = useState(getRolls(numDice));

  return (
    <main className="lucky__component">
      <h1>Hello Lucky {goal}</h1>
      <Dice dice={dado} />
      <Dice dice={dado} color="brown" />
    </main>
  );
};

export default LuckyN;
