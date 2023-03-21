import React from "react";

import "./guitar-neck-styles.css";

function FretMarker(props) {

  const isHidden = props.visible ? `hidden` : '';
  const fretMarkerClasses = `fret-marker 
                      fret-${props.fretNumber} 
                      string-${props.stringNumber} 
                      ${isHidden}`;

  const fretMarkerColor = {
      backgroundColor: props.isDarkMode ? "#23a559" : "black",
      color: props.isDarkMode ? "black" : "white"
  }

  return <div className={fretMarkerClasses} style={fretMarkerColor}>
            {props.label}
        </div>
}

export default FretMarker;
