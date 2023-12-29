import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { randomEmoji } from './data';

const Emoji = () => {
  const [emojis, setEmojis] = useState([{ id: uuid(), emoji: randomEmoji() }]);

  const addEmoji = () => {
    setEmojis((oldEmojis) => [
      ...oldEmojis, // Takes all the old emojis and adds them to the new array.
      { id: uuid(), emoji: randomEmoji() },
    ]);
  };

  const removeEmoji = (id) => {
    // const deleteOne = emojis.filter((image) => image.id !== id);
    // setEmojis(deleteOne);

    // setEmojis(emojis.filter((image) => image.id !== id));
    setEmojis((prevEmoji) => prevEmoji.filter((image) => image.id !== id));
  };

  // const allHeartsMade = () => {
  //   setEmojis((prevEmojis) => {
  //     return prevEmojis.map((heartImage) => {
  //       return { ...heartImage, emoji: '❤️️' };
  //     });
  //   });
  // };

  const allHeartsMade = () => {
    setEmojis((prevEmojis) =>
      prevEmojis.map((heartImage) => ({ ...heartImage, emoji: '❤️️' }))
    );
  };

  return (
    <div>
      {emojis.map((image) => (
        <span
          key={image.id}
          style={{ fontSize: '3rem', cursor: 'pointer' }}
          onClick={() => removeEmoji(image.id)}
        >
          {image.emoji}
        </span>
      ))}
      <button onClick={addEmoji}>Add Emoji</button>
      <button onClick={allHeartsMade} style={{ marginLeft: '5px' }}>
        Make them all hearts
      </button>
    </div>
  );
};

export default Emoji;
