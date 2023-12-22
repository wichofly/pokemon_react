import { useState } from 'react';

const RandomPokemon = () => {
  const [pokemon, setPokemon] = useState(Math.floor(Math.random() * 250) + 1);

  const getAnotherPokemon = () => {
    setPokemon(Math.floor(Math.random() * 250) + 1);
  };

  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon}.png`;

  return (
    <>
      <div className="pokemon__container">
        <h1>Pokemon #{pokemon}</h1>
        <img src={imgUrl} alt={`Pokemon #${pokemon}`} />
      </div>
      <button className="btn" onClick={getAnotherPokemon}>
        Another Pokemon
      </button>
    </>
  );
};

export default RandomPokemon;

// const RandomPokemon = () => {
//   const [pokemon, sePokemon] = useState();

//   const getAnotherPokemon = () => {
//     sePokemon(Math.floor(Math.random() * 250) + 1);
//   };

//   const pokeNumber = Math.floor(Math.random() * 250) + 1;
//   const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeNumber}.png`;

//   return (
//     <>
//       <div className="pokemon__container">
//         <h1>Pokemon #{pokeNumber}</h1>
//         <img src={imgUrl} />
//       </div>
//       <button onClick={getAnotherPokemon}>Another Pokemon</button>
//     </>
//   );
// };

// export default RandomPokemon;
