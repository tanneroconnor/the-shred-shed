import React, { useState } from "react";
import "./guitar-neck-styles.css";
import "./guitar-neck-grid-areas.css";

import Dot from "./FretMarker";
import String from "./String"

function Fret(props) {
  
  const fretClassName = (props.fretNumber !==0) ? "fret" : "nut fret";
  const locationClassName = `fret-${props.fretNumber}-area`;
  const classNames = `${fretClassName} ${locationClassName}`;

  return (
    <div className={classNames}>
      
    </div>
  )
}

export default Fret;