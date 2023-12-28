const DoubleDice = () => {
  const num1 = Math.floor(Math.random() * 3) + 1;
  const num2 = Math.floor(Math.random() * 3) + 1;

  const styleColor = { color: num1 === num2 ? 'green' : 'red' };

  return (
    <div className="doubleDice" style={styleColor}>
      <h2>Double Dice</h2>
      
      {/* <h3>{num1 === num2 ? 'You win!!!' : 'You lost :c'}</h3> */}
      {/* {num1 === num2 ? <h3>You win!</h3> : <h3>You lost :c</h3>} */}
      {/* {num1 === num2 ? <h3>You win!</h3> : null} */}

      {num1 === num2 && <h3>You win!</h3>}

      <p>Num1: {num1}</p>
      <p>Num2: {num2}</p>
    </div>
  );
};

export default DoubleDice;
