import React from 'react'
import { allProperties } from '../data';

const Property = (props) => {
  const { id, imageUrl, title, location, price } = property;
  const {property} = props;

  const handleDelete = (property) => {
    alert('property is deleted')
  };

  return (
    <section key={allProperties.id} className='property'>
      <img src={imageUrl} alt={title} />
      <h3>Title: {title}</h3>
      <p>Location: {location}</p>
      <p>Price: {price}</p>

      <button onClick={() => handleDelete(property.id)}>Delete</button>

    </section>
  );
};

export default Property;