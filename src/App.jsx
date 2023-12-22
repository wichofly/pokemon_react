import './App.css';
import ShoppingList from './components/shopping/ShoppingList';
// import RandomPokemon from './components/RandomPokemon';
// import DoubleDice from './components/DoubleDice';
// import Heading from './components/Heading';
// import { ColorList } from './components/ColorList';

const data = [
  { id: 1, product: 'milk', quantity: 11, completed: true },
  { id: 2, product: 'coffee', quantity: 7, completed: false },
  { id: 3, product: 'fish', quantity: 2, completed: true },
  { id: 4, product: 'sugar', quantity: 5, completed: false },
];

function App() {
  return (
    <>
      {/* <Heading color="blue" text="Welcome" fontSize="20px" />
      <Heading color="red" text="Orale" fontSize="40px" /> */}

      {/* <RandomPokemon /> */}

      {/* <DoubleDice />
      <DoubleDice /> */}

      {/* <ColorList colors={['red', 'orange', 'green', 'pink', 'purple']} /> */}

      <ShoppingList items={data} />
    </>
  );
}

export default App;
