import React from "react";
import Properties from "./Components/Properties";
import { allProperties } from "./data";

const App = () => {
    return (
        <>
            <h1>Real Estate Website</h1>
            {allProperties.length > 0 ? ( 
                <Properties allProperties={allProperties} />) 
                : ('no properties are available')}

        </>
    );
};

export default App;