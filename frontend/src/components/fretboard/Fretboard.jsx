import React, { useState } from "react";
import "./guitar-neck-styles.css";

import {
    NOTE_NAME_TO_PITCH_CLASS,
    NUMBER_OF_STRINGS,
    PITCH_CLASS_TO_NOTE_NAME,
    STANDARD_TUNING
} from "./constants.js";

import FretMarker from "./FretMarker";
import String from "./String";
import Fret from "./Fret";
import {getHarmonyName, getNotes, getScaleDegrees} from "../../dataFunctions.js";
import SelectHarmonyOverlay from "../harmony-ui/SelectHarmonyOverlay.jsx";
import SelectRootNoteMenu from "../harmony-ui/SelectRootNoteMenu.jsx";
import {Grid, SegmentedControl} from "@mantine/core";
import NumberOfFretsSlider from "../harmony-ui/NumberOfFretsSlider.jsx";

export default function Fretboard(props) {

    const [openStringTuning, setOpenStringTuning] = useState(STANDARD_TUNING);
    const [numberOfFrets, setNumberOfFrets] = useState(12);
    const [labelType, setLabelType] = useState('none');


    function createFretMarkers(numberOfFrets) {
        const fretMarkers = [];
        const numberOfStrings = openStringTuning.length;

        for (let stringNumber = 1; stringNumber <= numberOfStrings; stringNumber++) {

            const openStringNoteName = openStringTuning[stringNumber - 1];
            const openStringPitchClass = NOTE_NAME_TO_PITCH_CLASS[openStringNoteName];

            for (let fretNumber = 0; fretNumber <= numberOfFrets - 1; fretNumber++) {
                const currentPitchClass = (openStringPitchClass + fretNumber) % 12;
                const notesInHarmony = getNotes(props.harmonyData, props.harmony, props.rootNote);
                const harmonyPitchClassArray = notesInHarmony.map(note => NOTE_NAME_TO_PITCH_CLASS[note]);

                // Calculate Current Note Name
                const currentFretMarkerInHarmony = harmonyPitchClassArray.includes(currentPitchClass);
                const currentNoteName = PITCH_CLASS_TO_NOTE_NAME[currentPitchClass].find(note => notesInHarmony.includes(note));

                // Calculate Current Scale Degree
                const currentScaleDegree = getScaleDegrees(props.harmonyData, props.harmony)[notesInHarmony.indexOf(currentNoteName)];

                let currentLabel;

                if (labelType === 'scaleDegrees') {currentLabel = currentScaleDegree}
                else if (labelType === 'noteNames') {currentLabel = currentNoteName}
                else if (labelType === 'rootNotes') {currentLabel = (currentScaleDegree === '1') ? 'R' : ""}
                else {currentLabel = ""}

                fretMarkers.push(<FretMarker
                    key={`${stringNumber}-${fretNumber}`}
                    isDarkMode={props.isDarkMode}
                    stringNumber={stringNumber}
                    fretNumber={fretNumber}
                    label={currentLabel}
                    visible={!currentFretMarkerInHarmony}/>);
            }
        }
        return fretMarkers;
    }

    function createGridStrings() {
        const strings = [];
        for (let i = 1; i <= openStringTuning.length; i++) {
            strings.push(<String key={i} stringNumber={i} numberOfFrets={numberOfFrets} isDarkMode={props.isDarkMode}/>);
        }
        return strings;
    }

    function createGridFrets() {
        const frets = [];
        for (let i = 0; i <= numberOfFrets; i++) {
            frets.push(<Fret key={i} fretNumber={i} isDarkMode={props.isDarkMode}/>)
        }
        return frets;
    }

    const gridStyles = {
        gridTemplateColumns: `repeat(${numberOfFrets}, auto)`,
        gridTemplateRows: `repeat(${openStringTuning.length}, auto)`
    }

    function handleNumberOfFrets(numberOfFrets) {setNumberOfFrets(numberOfFrets)}

    const currentRootAndHarmony = `${props.rootNote} ${getHarmonyName(props.harmonyData, props.harmony)}`

  return (
      <div>
          <h3 className={"page-title"}>Fretboard Visualizer</h3>
          <div className="grid-container" style={gridStyles}>
              {createGridStrings()}
              {createFretMarkers(numberOfFrets + 1)}
              {createGridFrets()}
          </div>
          <div className="fretboard-user-interface-container">
              <Grid>
                  <Grid.Col xl={3} lg={4} sm={6} xs={12}>
                      <div className="fretboard-root-note-select-container">
                          <h2 className="fretboard-user-interface-title">Root Note</h2>
                          <SelectRootNoteMenu
                              rootNote={props.rootNote}
                              variant="square"
                              selectedColor="#228be6"
                              isDarkMode={props.isDarkMode}
                              handleRootButtonClick={props.handleRootButtonClick}/>
                      </div>
                  </Grid.Col>
                  <Grid.Col xl={3} lg={4} sm={6} xs={12}>
                      <h2 className="fretboard-user-interface-title">Scale / Chord</h2>
                      <SelectHarmonyOverlay
                          currentRootAndHarmony={currentRootAndHarmony}
                          isDarkMode={props.isDarkMode}
                          harmonyData={props.harmonyData}
                          harmony={props.harmony}
                          handleHarmonyChange={props.handleHarmonyChange}/>
                  </Grid.Col>
                  <Grid.Col xl={3} lg={4} sm={6} xs={12}>
                      <h2 className="fretboard-user-interface-title">Note Labels</h2>
                      <SegmentedControl
                          color="blue"
                          onChange={(e) => setLabelType(e)}
                          data={[
                              { label: 'None', value: 'none' },
                              { label: 'Roots', value: 'rootNotes' },
                              { label: 'Note Names', value: 'noteNames' },
                              { label: 'Scale Degrees', value: 'scaleDegrees' },
                          ]} />
                  </Grid.Col>
                  <Grid.Col xl={3} lg={4} sm={6} xs={12}>
                      <h2 className="fretboard-user-interface-title">Number of Frets</h2>
                        <NumberOfFretsSlider
                            handleNumberOfFrets={handleNumberOfFrets}
                        />
                  </Grid.Col>
              </Grid>
          </div>
      </div>
  )
}