import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { uploadImageToCloudinary } from '../Utilities/Uploadimage';


const AddProperty = (props) => {
  const [property, setProperty] = useState({
    title: '',
    image: '',
    location: '',
    price: 0,

  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log("name ", name)
    console.log("value  ", value)
    setProperty({
      ...property,
      [name]: value
    });

  };

  const handleImageChange = (event) => {
    const imagefile = event.target.files[0];
    setProperty({
      ...property,
      [event.target.name]: imagefile,
    });

  };

  const validateForm = () => {
    const newErrors = {};
    if (!property.title.trim() || property.title.length < 3)
      newErrors.title = 'title is required and must be at least than 3 characters long';
    if (!property.image)
      newErrors.image = 'insert an image file';
    if (property.location.length < 5)
      newErrors.location = 'location should be at least 5 characters long';
    if (!property.price || parseFloat(property.price) <= 0)
      newErrors.price = 'price must be a positive number';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {


    if (validateForm()) {
      event.preventDefault();
      const imageURL = await uploadImageToCloudinary(property.image)
      console.log(imageURL);

      const newProperty = {
        id: nanoid(),
        title: property.title,
        image: imageURL,
        location: property.location,
        price: property.price,
      };

      props.onHandleAddProperty(newProperty);

      // form reset
      setProperty({

        title: '',
        image: '',
        location: '',
        price: 0,

      });
    } else {
      console.log(errors);
    }

  };


  return (

    <div>
      <h2>Add Property</h2>
      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="title">Title: </label>
          <input type="text" id="title" name='title' value={property.title} onChange={handleChange} required />
          {errors.title && <span>{errors.title}</span>}
        </div>

        <div>
          <label htmlFor="image">Image: </label>
          <input type="file" id="image" name='image' onChange={handleImageChange} accept='image/*' required />
          {property.image && (
            <div>
              <img
                src={URL.createObjectURL(property.image)}
                alt="Selected Preview"
                style={{ maxWidth: '40%', maxheight: 'auto', marginTop: '10px' }}
              />
            </div>
          )}
        </div>

        <div>
          <label htmlFor="location">Location: </label>
          <input type="text" id="location" name='location' value={property.location} onChange={handleChange} required />
          {errors.location && <span>{errors.location}</span>}
        </div>

        <div>
          <label htmlFor="price">Price: </label>
          <input type="text" id="price" name='price' value={property.price} onChange={handleChange} required />
          {errors.price && <span>{errors.price}</span>}
        </div>
        <button type="submit">Add Property</button>

      </form>
    </div>
  );
};

export default AddProperty;
