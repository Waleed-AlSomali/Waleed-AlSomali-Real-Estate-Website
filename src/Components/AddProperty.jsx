import React, { useState } from 'react';



const AddProperty = (props) => {
    const [title, setTitle] = useState ('');
    const [imageUrl, setImageUrl] = useState ('');
    const [location, setLocation] = useState ('');
    const [price, setPrice] = useState ('0');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };
    const handleImageUrlChange = (event) => {
        setImageUrl(event.target.value);
    };
    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };
    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newProperty = {
            id: Date.now,
            title: title,
            imageUrl: imageUrl,
            location: location,
            price: price,
        };
        
        props.onHandleAddProperty(newProperty);

        // form reset
        setTitle('');
        setImageUrl('');
        setLocation('');
        setPrice('0');
    };
  return (
    <div>
      <h2>Add Property</h2>
      <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="title">Title: </label>
        <input type="text" id="title" value={title} onChange={handleTitleChange} required />
        </div>

        <div>
        <label htmlFor="imageUrl">Image Url: </label>
        <input type="text" id="imageUrl" value={imageUrl} onChange={handleImageUrlChange} required />
        </div>

        <div>
        <label htmlFor="location">Location: </label>
        <input type="text" id="location" value={location} onChange={handleLocationChange} required />
        </div>

        <div>
        <label htmlFor="price">Price: </label>
        <input type="text" id="price" value={price} onChange={handlePriceChange} required />
        </div>
        <button type="submit">Add Property</button>
      </form>
    </div>
  );
};

export default AddProperty;
