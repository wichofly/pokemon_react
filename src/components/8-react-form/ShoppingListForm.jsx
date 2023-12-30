import { useState } from 'react';

function ShoppingListForm({ addItem }) {
  const [formData, setFormData] = useState({ product: '', quantity: 0 });
  const [productIsValid, setProductIsValid] = useState(false);

  const validate = (product) => {
    if (product.length === 0) {
      setProductIsValid(false);
    } else {
      setProductIsValid(true);
    }
  };

  const handleChange = (evt) => {
    if (evt.target.name === 'product') {
      validate(evt.target.value);
    }

    const changeField = evt.target.name;
    const newValue = evt.target.value;

    setFormData((prevData) => ({
      ...prevData, // Spread operator to copy the previous data
      [changeField]: newValue, // Update the value of the specified field
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (productIsValid) {
      addItem(formData);
      setFormData({ product: '', quantity: 0 }); // empty out the form after is submitted.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <h2 style={{ marginBottom: '15px' }}>
        📃Product is: {formData.product} and
      </h2>
      <h2 style={{ marginBottom: '15px' }}>
        🔢Quantity is: {formData.quantity}
      </h2> */}

      <div>
        <div style={{ marginBottom: '10px' }}>
          {!productIsValid && (
            <p style={{ color: '#BF3131' }}>Product can not be empty</p>
          )}
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
        <div style={{ marginBottom: '5px' }}>
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
        <button
          disabled={!productIsValid}
          style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '15px auto',
          }}
        >
          Add item
        </button>
      </div>
    </form>
  );
}

export default ShoppingListForm;
