import React, { useState } from "react";
import "./guitar-neck-styles.css";
import "./guitar-neck-grid-areas.css";

import {NUMBER_OF_FRETS, NUMBER_OF_STRINGS} from "../constants";
import { OPEN_STRINGS, TWELVE_NOTES_SHARPS } from '../../music-theory/notes/Notes';
import { MAJOR_SCALES } from "../../music-theory/scales/MajorScale";

import FretMarker from "./FretMarker";
import String from "./String";
import Fret from "./Fret";

function Fretboard(props) {

  const [scale, setScale] = useState(props.scale);

  function updateScale(scale) {
    setScale(scale);
  };


  function createFretMarkers(numberOfFrets, numberOfStrings) {
    const fretMarkers = [];
    
    for (let stringNumber = 1; stringNumber <= NUMBER_OF_STRINGS; stringNumber++) {
        let currentStringNote = OPEN_STRINGS[stringNumber - 1];
        let openStringIndex = TWELVE_NOTES_SHARPS.indexOf(currentStringNote) % 12;

        for (let fretNumber = 0; fretNumber <= NUMBER_OF_FRETS - 1; fretNumber++) {
          let currentNoteName = TWELVE_NOTES_SHARPS[(openStringIndex + fretNumber) % 12];
          let currentScale = props.scale;
          fretMarkers.push(<FretMarker 
              key={`${stringNumber}-${fretNumber}`} 
              stringNumber={stringNumber} 
              fretNumber={fretNumber} 
              noteName={currentNoteName}
              isHidden={!scale.includes(currentNoteName)}/>);
          }
        }
    return fretMarkers;
    }

  return (
      <div className="grid-container">
      
      {/* Create function to generate these */}
      {Array.from({length: NUMBER_OF_STRINGS}, (x, i) => i + 1).map(i => (
        <String key={i} stringNumber={i} />
        ))}
  
          {/* //Function to generate FretMarkers */}
          {createFretMarkers(NUMBER_OF_FRETS + 1, NUMBER_OF_STRINGS)}
  
          {Array.from({length: NUMBER_OF_FRETS}, (x, i) => i).map(i => (
            <Fret key={i} fretNumber={i} />
          ))}        
      </div>
      
  )
}

export default Fretboard;