import React, { useState } from "react";
import Properties from "./Components/Properties";
import { allProperties } from "./data";
import AddProperty from "./Components/AddProperty";

const App = () => {

    const [newProperty, setProperty] = useState(allProperties);

    const handleAddProperty = (newProperty) => {
        setProperty((prevProperties) => {
            return [...prevProperties, newProperty];
        });
    };

    const handleDeleteProperty = (id) => {
        console.log(id)
    }

    return (
        <>
            <h1>Real Estate Website</h1>
            <AddProperty onHandleAddProperty ={handleAddProperty} /> 
            <br />
            {allProperties.length > 0 ? ( 
                <Properties allProperties={allProperties} onHandleDeleteProperty ={handleDeleteProperty} />) 
                : (<h2 className="noProperty">no properties are available</h2>)}

        </>
    );
};

export default App;