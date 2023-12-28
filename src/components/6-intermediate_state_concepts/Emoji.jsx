import { useState } from 'react';
import { v4 as uuid } from 'uuid';

const Emoji = () => {
  const [emojis, setEmojis] = useState([{ id: uuid(), emoji: '😇' }]);

  const addEmoji = () => {
    setEmojis((oldEmojis) => [...oldEmojis, { id: uuid(), emoji: '🤠' }]);
  };

  const removeOne = (id) => {
    // const deleteOne = emojis.filter((image) => image.id !== id);
    // setEmojis(deleteOne);

    // setEmojis(emojis.filter((image) => image.id !== id));
    setEmojis((prevEmoji) => prevEmoji.filter((image) => image.id !== id));
  };

  return (
    <div>
      {emojis.map((image) => (
        <span
          key={image.id}
          style={{ fontSize: '3rem', cursor: 'pointer' }}
          onClick={() => removeOne(image.id)}
        >
          {image.emoji}
        </span>
      ))}
      <button onClick={addEmoji}>Add Emoji</button>
    </div>
  );
};

export default Emoji;
