import React from 'react'
import { useLocation } from 'react-router-dom'

const PropertyDetails = () => {
    const { state } = useLocation();
    const { title, image, location, price } = state;

    return (
        <div>
            <h2>Property Details page</h2>
            <h2>{title}</h2>
            <img src={image} alt={title} style={{ maxWidth: '40%', maxheight: 'auto', marginTop: '10px' }} />
            <p>{location}</p>
            <p>{price}</p>
        </div>
    )
}

export default PropertyDetails
