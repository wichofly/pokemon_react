import Slots from './Slots';

const Property = ({ name, price, rating, id }) => {
  return (
    <div className="property">
      <h2>{name}</h2>
      <h3>${price} a night</h3>
      <h4>{rating}</h4>
    </div>
  );
};

export default Property;
