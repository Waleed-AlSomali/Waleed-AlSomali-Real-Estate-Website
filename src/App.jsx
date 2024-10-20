import React, { useState } from "react";
import Properties from "./Components/Properties";
import { allProperties } from "./data";
import AddProperty from "./Components/AddProperty";

const App = () => {

    const [propertyList, setProperty] = useState(allProperties);

    const handleAddProperty = (newProperty) => {
        setProperty((prevProperties) => {
            return [...prevProperties, newProperty]
        });
    };
    
    console.log("propertyList", propertyList);

    const handleDeleteProperty = (id) => {
       const filteredProperties = propertyList.filter((property) => property.id !== id);
       setProperty(filteredProperties);
    };

    return (
        <>
            <h1>Real Estate Website</h1>
            <AddProperty onHandleAddProperty ={handleAddProperty} /> 
            <br />
            {allProperties.length > 0 ? ( 
                <Properties allProperties={propertyList} onHandleDeleteProperty ={handleDeleteProperty} />) 
                : (<h2 className="noProperty">no properties are available</h2>)}

        </>
    );
};

export default App;