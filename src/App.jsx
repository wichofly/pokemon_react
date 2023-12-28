import './App.css';
// import Counter from './components/counters/Counter';
// import Toggler from './components/counters/Toggler';
// import PropertyList from './components/properties/PropertyList';
// import ShoppingList from './components/shopping/ShoppingList';
// import RandomPokemon from './components/RandomPokemon';
// import DoubleDice from './components/DoubleDice';
// import Heading from './components/Heading';
// import { ColorList } from './components/ColorList';
import ColorBox from './components/exercise/ColorBox';

// const data = [
//   { id: 1, product: 'milk', quantity: 11, completed: true },
//   { id: 2, product: 'coffee', quantity: 7, completed: false },
//   { id: 3, product: 'fish', quantity: 2, completed: true },
//   { id: 4, product: 'sugar', quantity: 5, completed: false },
// ];

const properties = [
  { id: 1, name: 'San Salvador', rating: 4.5, price: 98 },
  { id: 2, name: 'Acajutla', rating: 3.9, price: 102 },
  { id: 3, name: 'Gold Juayua', rating: 4.2, price: 99 },
  { id: 4, name: 'Beautiful view', rating: 4.8, price: 55 },
  { id: 5, name: 'El Paisnal', rating: 3.8, price: 29 },
  { id: 6, name: 'Santa Ana', rating: 4.1, price: 69 },
];

const colors = [
  '#FFE7C1',
  '#DC84F3',
  '#86B6F6',
  '#F2AFEF',
  '#A1EEBD',
  '#FF9800',
  '#65B741',
  '#C69774',
  '#776B5D',
  '#EC8F5E',
  '#A9A9A9',
  '#B15EFF',
  '#D6D46D',
  '#A459D1',
  '#191825',
  '#00FFD1',
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

      {/* <ShoppingList items={data} /> */}

      {/* <PropertyList properties={properties} /> */}

      {/* <Counter /> */}

      {/* <Toggler /> */}

      <ColorBox colors={colors} />
    </>
  );
}

export default App;

// properties={properties}
// The first "properties" is the name of the prop from PropertyList component "const PropertyList = ({ properties }) => {"
// the second "properties" is the name of  "const properties = [ ..."
