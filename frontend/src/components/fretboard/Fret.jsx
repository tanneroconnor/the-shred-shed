import React from "react";
import "./guitar-neck-styles.css";

export default function Fret(props) {

  const highlightedFret = [3, 5, 7, 9, 12, 15, 17, 19, 22, 24].includes(props.fretNumber);
  const fretColor = props.isDarkMode ? "#5f6368" : "black";
  const fretHighlightColor = props.isDarkMode ? "#141517" : "lightgray";

  const fretStyles = {
    borderRight: props.fretNumber !== 0 ? `.2rem solid ${fretColor}` : `.5rem solid ${fretColor}`,
    backgroundColor: highlightedFret ? `${fretHighlightColor}` : ""
  }

  return (
      <div
          className={`fret fret-${props.fretNumber}-entire-column`}
          style={fretStyles}>
      </div>
  )
}