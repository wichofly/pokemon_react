import { useState } from 'react';
import ShoppingListForm from './ShoppingListForm';

const ShoppingList = () => {
  const [items, setItems] = useState([
    { id: 3, product: 'Bananas', quantity: 5 },
    { id: 4, product: 'Eggs', quantity: 12 },
  ]);

  // const addItem = (item) => {
  //   setItems((currItems) => {
  //     return [...currItems, { ...item, id: 9 }];
  //   });
  // };

  const addItem = (item) => {
    setItems((items) => [...items, { ...item, id: 9 }]);
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <ul style={{ marginBottom: '30px', marginTop: '15px' }}>
        {items.map((i) => (
          <li
            key={i.id}
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {i.product} -- {i.quantity}
          </li>
        ))}
      </ul>
      <ShoppingListForm addItem={addItem} />
    </div>
  );
};

export default ShoppingList;
