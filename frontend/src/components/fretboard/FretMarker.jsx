import React, { useState } from "react";
import "./guitar-neck-styles.css";

function FretMarker(props) {
  // State
  const [isHidden, setIsHidden] = useState(props.isHidden);
  const noteName = props.noteName.toString();

  // CSS Classes
  const fretClassName = 'fret-' + props.fretNumber;
  const stringClassName = 'string-' + props.stringNumber;
  const isHiddenClassName = isHidden ? `hidden` : ``;
  const classNames = `fret-marker ${stringClassName} ${fretClassName} ${isHiddenClassName}`;

  return (
  <div className={classNames}>{noteName}</div>
  )
}

export default FretMarker;
