import React, { useState } from "react";
import {NUMBER_OF_FRETS, NUMBER_OF_STRINGS} from "../constants";
import "./guitar-neck-grid-areas.css";


function String(props) {

    // CSS
    const centerHrClassName = "center-hr";
    const stringAreaClassName = "string-" + props.stringNumber + "-area";
    const classNames = `${centerHrClassName} ${stringAreaClassName}`;
    

    // Generate Six String Components
    const strings = [];

    for (let i = 1; i <= NUMBER_OF_STRINGS; i++) {
        strings.push(<String key={i} stringNumber={i} />);
    }
 
    return (
        <div className={classNames}>
            <hr />
        </div>
    )
}

export default String;
