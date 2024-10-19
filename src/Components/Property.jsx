import React from 'react'
import { allProperties } from '../data';

const Property = (props) => {
  const { imageUrl, title, location, price } = props.property;
  return (
    <section key={allProperties.id} className='property'>
      <img src={imageUrl} alt={title} />
      <h3>Title: {title}</h3>
      <p>Location: {location}</p>
      <p>Price: {price}</p>

    </section>
  )
}

export default Property
