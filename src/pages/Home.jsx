import React, { useState } from 'react'
import Properties from '../Components/Properties';
import { allProperties } from '../data';



const Home = () => {

  const [propertyList, setProperty] = useState(allProperties);

    console.log("propertyList", propertyList);

    const handleDeleteProperty = (id) => {
        const filteredProperties = propertyList.filter((property) => property.id !== id);
        setProperty(filteredProperties);
    };

    const handleAddProperty = (newProperty) => {
      setProperty((prevProperties) => {
          return [...prevProperties, newProperty]
      });
     
  };

  return (
    <div>
      <h1> Real Estate Website </h1>
      <h2> Property List: </h2>
      {propertyList.length > 0 ? (
                <Properties allProperties={propertyList} onHandleDeleteProperty={handleDeleteProperty} onHandleAddProperty={handleAddProperty} />)
                : (<h2 className="noProperty">no properties are available</h2>)}
    
    </div>
    
  )
}

export default Home;
