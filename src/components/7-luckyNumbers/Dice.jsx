import Die from './Die';
import './lucky.css';

const Dice = ({ dice, color }) => {
  return (
    <section className="dice__component">
      {dice.map((value, index) => (
        <Die key={index} val={value} color={color} />
      ))}
    </section>
  );
};

export default Dice;
