import { useState } from 'react';
import { v4 as uuid } from 'uuid';

const Emoji = () => {
  const [emojis, setEmojis] = useState([{ id: uuid(), emoji: '😇' }]);

  const addEmoji = () => {
    setEmojis((oldEmojis) => [...oldEmojis, { id: uuid(), emoji: '🤠' }]);
  };

  return (
    <div>
      {emojis.map((image) => (
        <span key={image.id} style={{ fontSize: '3rem' }}>
          {image.emoji}
        </span>
      ))}
      <button onClick={addEmoji}>Add Emoji</button>
    </div>
  );
};

export default Emoji;
