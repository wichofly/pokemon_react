import './lucky.css';

const Die = ({ val, color }) => {
  return (
    <div className="die__component" style={{ background: color }}>
      {val}
    </div>
  );
};

export default Die;

/*
  - It gets a value (val) as a prop and it will render that value.
*/
