import React, { useState } from 'react';
import { nanoid } from 'nanoid';


const AddProperty = (props) => {
  const [property, setProperty] = useState({
    title: '',
    imageUrl: '',
    location: '',
    price: 0,

  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log("name ", name)
    console.log("value  ", value)
    setProperty({
      ...property,
      [name]: value
    });

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProperty = {
      id: nanoid(),
      title: property.title,
      imageUrl: property.imageUrl,
      location: property.location,
      price: property.price,
    };

    props.onHandleAddProperty(newProperty);

    // form reset
    setProperty({

      title: '',
      imageUrl: '',
      location: '',
      price: 0,

    });
  };
  return (

    <div>
      <h2>Add Property</h2>
      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="title">Title: </label>
          <input type="text" id="title" name='title' value={property.title} onChange={handleChange} required />
        </div>

        <div>
          <label htmlFor="imageUrl">Image Url: </label>
          <input type="text" id="imageUrl" name='imageUrl' value={property.imageUrl} onChange={handleChange} required />
        </div>

        <div>
          <label htmlFor="location">Location: </label>
          <input type="text" id="location" name='location' value={property.location} onChange={handleChange} required />
        </div>

        <div>
          <label htmlFor="price">Price: </label>
          <input type="text" id="price" name='price' value={property.price} onChange={handleChange} required />
        </div>
        <button type="submit">Add Property</button>

      </form>
    </div>
  );
};

export default AddProperty;
