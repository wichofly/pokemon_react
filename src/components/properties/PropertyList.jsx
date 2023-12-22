import Property from './Property';
import './PropertyList.css';

const PropertyList = ({ properties }) => {
  return (
    <div className="property__list">
      {properties.map((property) => (
        <Property key={property.id} {...property} />
      ))}
    </div>
  );
};

export default PropertyList;
