 export const randomEmoji = () => {
  const choices = [
    '😴',
    '🤮',
    '🤑',
    '🥳',
    '🐼',
    '🐻',
    '🦁',
    '🤩',
    '😇',
    '🤠',
    '😁',
    '🤗',
  ];
  return choices[Math.floor(Math.random() * choices.length)];
};