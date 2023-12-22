
const Property = ({ name, price, rating }) => {
  return (
    <div className="property">
      <h2>{name}</h2>
      <h3>${price} a night</h3>
      <h4>{rating} Rating</h4>
    </div>
  );
};

export default Property;
