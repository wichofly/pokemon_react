import ShoppingListItem from './ShoppingListItem';

const ShoppingList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => ( 
        // <ShoppingListItem
        //   key={item.id}
        //   product={item.product}
        //   quantity={item.quantity}
        //   completed={item.completed}
        // />
        <ShoppingListItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default ShoppingList;

// If we want to pass the props to the component, we can use the spread operator
// {...item}

// const data = [
//   { product: 'milk', quantity: 11, completed: true },
//   { product: 'coffee', quantity: 7, completed: false },
//   { product: 'fish', quantity: 2, completed: true },
//   { product: 'sugar', quantity: 5, completed: false },
// ];
