import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import ShoppingListForm from './ShoppingListForm';

const ShoppingList = () => {
  const [items, setItems] = useState([
    { id: uuid(), product: 'Bananas', quantity: 5 },
    { id: uuid(), product: 'Eggs', quantity: 12 },
  ]);

  // const addItem = (item) => {
  //   setItems((currItems) => {
  //     return [...currItems, { ...item, id: 9 }];
  //   });
  // };

  const addItem = (item) => {
    // if (item.product.length === 0) {
    //   return;
    // }

    if (!item.product) {
      return;
    }
    setItems((items) => [...items, { ...item, id: uuid() }]);
  };

  return (
    <div>
      <h1>📃Shopping List</h1>
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
