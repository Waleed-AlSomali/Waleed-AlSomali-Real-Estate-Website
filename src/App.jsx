import React, { useState } from "react";
import Properties from "./Components/Properties";
import { allProperties } from "./data";
import AddProperty from "./Components/AddProperty";

// import UpdateProperty from "./Components/UpdateProperty";

const App = () => {

    const [propertyList, setProperty] = useState(allProperties);
    //const [updatePropertyList, setUpdateProperty] = useState();

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

    // const handleUpdateProperty = (property) => {
    //     setUpdatedProperty(property)
    //  };


    return (
        <>
            <h1>Real Estate Website</h1>
            <AddProperty onHandleAddProperty={handleAddProperty} />
            {allProperties.length > 0 ? (
                <Properties allProperties={propertyList} onHandleDeleteProperty={handleDeleteProperty} />)
                : (<h2 className="noProperty">no properties are available</h2>)}

        </>
    );
};

export default App;
 {/* <UpdateProperty onHandleUpdateProperty ={handleUpdateProperty} />
            <br /> */}