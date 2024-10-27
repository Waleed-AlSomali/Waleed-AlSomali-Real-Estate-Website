import React from 'react'

import styles from '../styles/Property.module.css'
import { Link } from 'react-router-dom';

const Property = (props) => {
  const { property, onHandleDeleteProperty } = props;
  console.log("property object in property component ", property)

  const { id, image, title, location, price } = property;

  const handleDelete = (id) => {
    onHandleDeleteProperty(id)
  };

  // array[index] object: dot notation : person.name person.id
  return (
    <section key={id} className={styles.property}>
      <img src={image} alt={title} />
      <h3>Title: {title}</h3>
      <p>Location: {location}</p>
      <p>Price: {price}</p>
      <Link to={`/properties/${id}`} state={property}>Show details</Link> <button className={styles.deleteBtn} onClick={() => handleDelete(id)}>Delete</button>
     

    </section>
  );
};

export default Property;