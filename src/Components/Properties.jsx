import React from "react";
import Property from "./Property";


const Properties = (props) => {
    const { allProperties, onHandleDeleteProperty, } = props;
    return (
        <section className="properties">
            {allProperties.map((property) => {
                return <Property property={property} 
                        onHandleDeleteProperty={onHandleDeleteProperty} key={property.id}
                        // onHandleUpdateProperty={onHandleUpdateProperty}
                         />
            })}
        </section>
    );
};

export default Properties;