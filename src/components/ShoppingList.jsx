import ShoppingListItem from './ShoppingListItem';

const ShoppingList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <ShoppingListItem
          key={item.id}
          product={item.product}
          quantity={item.quantity}
          completed={item.completed}
        />
      ))}
    </ul>
  );
};

export default ShoppingList;

// const data = [
//   { product: 'milk', quantity: 11, completed: true },
//   { product: 'coffee', quantity: 7, completed: false },
//   { product: 'fish', quantity: 2, completed: true },
//   { product: 'sugar', quantity: 5, completed: false },
// ];
