const ShoppingListItem = ({ product, quantity, completed }) => {
  const itemsColor = {
    color: completed ? 'green' : 'orange',
    textDecoration: completed ? 'line-through' : false,
  };

  return (
    <li style={itemsColor}>
      {product} - {quantity}
    </li>
  );
};

export default ShoppingListItem;
