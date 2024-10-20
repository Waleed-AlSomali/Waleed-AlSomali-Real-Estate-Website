import React from "react";
import Property from "./Property";


const Properties = (props) => {
    const { allProperties } = props;
    return (
        <section className="properties">
            {allProperties.map((property) => {
                return <Property property={property} key={property.id} />;
            })};
        </section>
    );
};

export default Properties;