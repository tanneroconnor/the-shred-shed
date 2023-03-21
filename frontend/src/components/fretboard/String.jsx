import React from "react";
import "./guitar-neck-grid.scss";


export default function String(props) {


    const stringLengthStyle = {
        gridRow: props.stringNumber,
        gridRowStart: props.stringNumber,
        gridColumnStart: 1,
        gridColumnEnd: props.numberOfFrets + 2,

    }
    const stringColor = {
        border: props.isDarkMode ? "2px solid #5f6368" : "2px solid black"
    }

    return (
        <div style={stringLengthStyle} className={'center-hr'}>
            <hr style={stringColor}/>
        </div>
    )
}