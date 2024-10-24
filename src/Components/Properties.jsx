import React from "react";

import Property from "./Property";
import styles from '../styles/Properties.module.css'

const Properties = (props) => {
    const { allProperties, onHandleDeleteProperty } = props;
    return (
        <section className={styles.properties}>
            {allProperties.map((property) => {
                return <Property property={property}
                    onHandleDeleteProperty={onHandleDeleteProperty} key={property.id}
                />
            })}
        </section>
    );
};

export default Properties;