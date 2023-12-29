import { useState } from 'react';

const UserNameForm = () => {
  const [username, setUsername] = useState('');

  const updateUsername = (event) => {
    console.log(event.target.value);
    setUsername(event.target.value);
  };

  return (
    <div>
      <label htmlFor="username">Enter a username</label>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={updateUsername}
        id="username"
      />
      <button style={{ marginLeft: '10px' }}>Submit</button>
    </div>
  );
};

export default UserNameForm;
