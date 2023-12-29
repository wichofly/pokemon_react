import { useState } from 'react';

const SignupForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const updateFirstName = (evt) => {
    setFirstName(evt.target.value);
  };

  const updateLastName = (evt) => {
    setLastName(evt.target.value);
  };

  const handleSubmit = () => {
    console.log(firstName, lastName);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label htmlFor="first-name">First Name</label>
      <input
        type="text"
        placeholder="username"
        value={firstName}
        onChange={updateFirstName}
        id="first-name"
      />
      <label htmlFor="last-name">Last Name</label>
      <input
        type="text"
        placeholder="username"
        value={lastName}
        onChange={updateLastName}
        id="last-name"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default SignupForm;
