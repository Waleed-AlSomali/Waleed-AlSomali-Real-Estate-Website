import React from 'react'
import { useNavigate } from 'react-router-dom';

import AddProperty from '../Components/AddProperty'

const AddPropertyPage = () => {
   const navigate = useNavigate();
  

  const handleAddProperty = (newProperty) => {
    setProperty((prevProperties) => {
        return [...prevProperties, newProperty]
    });
    navigate('/')
};
  return (
    <div>
      <h2>Add Property</h2>
      <AddProperty onHandleAddProperty={handleAddProperty} />
    </div>
  )
}

export default AddPropertyPage;
