import React from 'react'

const Property = (props) => {
  const { property, onHandleDeleteProperty } = props;
  console.log("property object in property component ", property)

  const { id, imageUrl, title, location, price } = property;

  const handleDelete = (id) => {
    onHandleDeleteProperty(id)
  };
  // array[index] object: dot notation : person.name person.id
  return (
    <section key={id} className='property'>
      <img src={imageUrl} alt={title} />
      <h3>Title: {title}</h3>
      <p>Location: {location}</p>
      <p>Price: {price}</p>

      <button onClick={() => handleDelete(id)}>Delete</button>

    </section>
  );
};

export default Property;