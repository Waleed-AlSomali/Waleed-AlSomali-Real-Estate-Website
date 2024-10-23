import React from 'react'

const Property = (props) => {
  const { property, onHandleDeleteProperty,  } = props;
  console.log("property object in property component ", property)

  const { id, image, title, location, price } = property;

  const handleDelete = (id) => {
    onHandleDeleteProperty(id)
  };

  // const handleUpdate = (property) => {
  //   onHandleUpdateProperty(property);
  // }

  // array[index] object: dot notation : person.name person.id
  return (
    <section key={id} className='property'>
      <img src={image} alt={title} />
      <h3>Title: {title}</h3>
      <p>Location: {location}</p>
      <p>Price: {price}</p>

      <button onClick={() => handleDelete(id)}>Delete</button>
      {/* <button onClick={() => handleUpdate(property)}>Edit</button> */}

    </section>
  );
};

export default Property;