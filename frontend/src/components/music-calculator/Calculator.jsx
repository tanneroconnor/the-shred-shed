import React from 'react'
import './calculator.css'
import SelectRootNoteMenu from "../harmony-ui/SelectRootNoteMenu.jsx";
import SelectHarmonyDropDown from "../harmony-ui/SelectHarmonyDropDown.jsx";
import {Grid} from "@mantine/core";
import {getHarmonyName, getNotes, getScaleDegrees} from "../../dataFunctions.js";

export default function Calculator(props) {

    const ampCaseStyles = {
        backgroundColor: props.isDarkMode ? "white" : "#333333",
        border: props.isDarkMode ? "1px solid #9f9375" : "1px solid #222222",
    }

    const ampTrimStyles = {
        border: props.isDarkMode ? "2px solid #9f9375" : "2px solid white",
        backgroundColor: props.isDarkMode ? "rgb(159 147 117 / 90%)" : "white"
    }

    const noteElements = getNotes(props.harmonyData, props.harmony, props.rootNote).map(note => {
        return <Grid.Col span={1}><h2>{note}</h2></Grid.Col>
    })


    const scaleDegreeElements = getScaleDegrees(props.harmonyData, props.harmony).map(scaleDegree => {
        return <Grid.Col key={scaleDegree} span={1}><h4>{scaleDegree}</h4></Grid.Col>
    })

    const numberOfNotes = getScaleDegrees(props.harmonyData, props.harmony).length;

    return (
        <div className="amp-wrapper">
            <h3 className={"page-title"}>Music Theory Calculator</h3>
            <div className="amp">
                <div className="amp-head" style={ampCaseStyles}>
                    <div className="amp-head-trim" style={ampTrimStyles}>
                        <div className="amp-screen">
                            <div className="note-names-on-screen">
                                <Grid gutter={0} columns={numberOfNotes}>
                                    {noteElements}
                                </Grid>
                            </div>
                            <div className="scale-degrees-on-screen">
                                <Grid gutter={0} columns={numberOfNotes}>
                                    {scaleDegreeElements}
                                </Grid>
                            </div>
                        </div>
                    </div>
                    <div className="amp-head-plate">
                        <h3>{`${props.rootNote} ${getHarmonyName(props.harmonyData, props.harmony)}`}</h3>
                    </div>
                </div>
                <div className="amp-cab" style={ampCaseStyles}>
                    <div className="amp-cab-trim" style={ampTrimStyles}>
                        <h3>Roots</h3>
                        <SelectRootNoteMenu
                            selectedColor="#FD9D32"
                            variant="circle"
                            rootNote={props.rootNote}
                            isDarkMode={props.isDarkMode}
                            handleRootButtonClick={props.handleRootButtonClick}/>

                        <SelectHarmonyDropDown
                            harmonyData={props.harmonyData}
                            handleHarmonyChange={props.handleHarmonyChange}
                            harmony={props.harmony}/>

                    </div>
                </div>
            </div>
        </div>
    )
}