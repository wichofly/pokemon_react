import { useState } from 'react';

const flex = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '10px',
};

const btn_decrease = {
  marginRight: '5px',
  padding: '5px 10px',
  border: '1px solid #F6ECA9',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '18px',
  backgroundColor: '#BF3131',
  color: '#EAD196',
};

const btn_plus = {
  padding: '5px 10px',
  border: '1px solid #F6ECA9',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '18px',
  backgroundColor: '#C6CF9B',
  color: '#596FB7',
};

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter((currentState) => currentState + 1);
  };

  return (
    <div style={flex}>
      <p style={{ marginRight: '10px' }}>Count is: {counter}</p>
      <div style={{ display: 'flex' }}>
        <button
          onClick={() => setCounter(counter > 0 ? counter - 1 : 0)}
          style={btn_decrease}
        >
          -
        </button>
        <button onClick={increase} style={btn_plus}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;

/*
 - setCounter(counter + 1) :
   It shows one number behind in the console.
   This is because the state update is asynchronous.
   So the console.log will be called before the state is updated.

   The benefit of using the function setCounter((currentState) => currentState + 1) is that it is more efficient than using setCounter(counter + 1). 
   This is because the function setCounter((currentState) => currentState + 1) only updates the state of the counter when the function increase() is called, 
   while the function setCounter(counter + 1) updates the state of the counter every time the code is executed. 
   This can result in slower performance if the counter is updated frequently
<---------------------------------------------------------------------------------------------------------------------------------------------------------------->

*/
