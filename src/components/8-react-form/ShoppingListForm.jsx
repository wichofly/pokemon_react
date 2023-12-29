import { useState } from 'react';

function ShoppingListForm() {
  const [formData, setFormData] = useState({ product: '', quantity: 0 });

  const handleChange = (evt) => {
    const changeField = evt.target.name;
    const newValue = evt.target.value;

    setFormData((prevData) => ({
      ...prevData, // Spread operator to copy the previous data
      [changeField]: newValue, // Update the value of the specified field
    }));
  };

  return (
    <form>
      <h1 style={{ marginBottom: '15px' }}>
        📃Product is: {formData.product} and
      </h1>
      <h1 style={{ marginBottom: '15px' }}>
        🔢Quantity is: {formData.quantity}
      </h1>

      <div>
        <div style={{ marginBottom: '5px' }}>
          <label htmlFor="product">Product Name</label>
          <input
            type="text"
            placeholder="Product name"
            name="product"
            id="product"
            onChange={handleChange}
            value={formData.product}
            style={{ marginLeft: '10px' }}
          />
        </div>
        <div>
          <label htmlFor="quantity">Quantity Name</label>
          <input
            type="number"
            placeholder="1"
            name="quantity"
            id="quantity"
            onChange={handleChange}
            value={formData.quantity}
            style={{ marginLeft: '10px' }}
          />
        </div>
      </div>
    </form>
  );
}

export default ShoppingListForm;
