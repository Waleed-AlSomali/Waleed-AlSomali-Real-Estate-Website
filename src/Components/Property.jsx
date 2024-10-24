import React from 'react'

import styles from '../styles/Property.module.css'

const Property = (props) => {
  const { property, onHandleDeleteProperty } = props;
  console.log("property object in property component ", property)

  const { id, image, title, location, price } = property;

  const handleDelete = (id) => {
    onHandleDeleteProperty(id)
  };

  //  const handleUpdate = (property) => {
  //    onHandleUpdateProperty(property);
  //  }

  // array[index] object: dot notation : person.name person.id
  return (
    <section key={id} className={styles.property}>
      <img src={image} alt={title} />
      <h3>Title: {title}</h3>
      <p>Location: {location}</p>
      <p>Price: {price}</p>

      <button className={styles.deletebtn} onClick={() => handleDelete(id)}>Delete</button>
     

    </section>
  );
};

export default Property;