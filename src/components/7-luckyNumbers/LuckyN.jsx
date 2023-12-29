import { useState } from 'react';
import { getRolls, sum } from './utils';

import Dice from './Dice';

const LuckyN = ({ numDice = 2, goal = 7, title = 'Dice Game' }) => {
  const [dado, setDado] = useState(getRolls(numDice));

  const isWinner = sum(dado) === goal;

  const roll = () => setDado(getRolls(numDice));

  return (
    <main className="lucky__component">
      <h1>
        {title}
        {goal} {isWinner && 'You won!'}
      </h1>
      <Dice dice={dado} />
      <button onClick={roll}>Re-Roll Dice</button>
    </main>
  );
};

export default LuckyN;
