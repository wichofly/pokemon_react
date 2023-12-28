import { useState } from 'react';

const Emoji = () => {
  const [emojis, setEmojis] = useState(['😇']);

  const addEmoji = () => {
    setEmojis((oldEmojis) => [...oldEmojis, '🥳']);
  };

  return (
    <div>
      {emojis.map((image) => (
        <span style={{ fontSize: '3rem' }}>{image}</span>
      ))}
      <button onClick={addEmoji}>Add Emoji</button>
    </div>
  );
};

export default Emoji;
