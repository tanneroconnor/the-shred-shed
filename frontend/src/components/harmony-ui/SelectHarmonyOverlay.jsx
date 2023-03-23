import React from 'react'
import {Button, Group, Modal} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import {getHarmonyName, getHarmonyType} from "../../dataFunctions.js";
import {IconMenu2} from "@tabler/icons-react";
import "../../App.css"
import {MAJOR_MODES} from "../fretboard/constants.js";


export default function SelectHarmonyOverlay(props) {

    const [opened, { open, close }] = useDisclosure(false);

    // Button Columns in Harmony Overlay
    let triads = [];
    let seventhChords = [];
    let scales = [];
    let majorModes = [];

    function createSelectHarmonyFields() {
        if (props.harmonyData) {
            for(const currentHarmony in props.harmonyData) {

                const currentHarmonyType = getHarmonyType(props.harmonyData, currentHarmony);
                const currentHarmonyName = getHarmonyNameForHarmonyButton(currentHarmony);

                const currentButton = (
                        <Button
                            variant={props.harmony === currentHarmony ? "filled" : "default"}
                            onClick={() => props.handleHarmonyChange(currentHarmony)}>
                            {currentHarmonyName}
                        </Button>
                )

                addButtonToHarmonyArray(currentHarmonyType, currentHarmony, currentButton);

            }
        }
    }

    function getHarmonyNameForHarmonyButton(harmony) {
        let harmonyName = getHarmonyName(props.harmonyData, harmony);

        // To clarify for users who are less comfortable with the modal names for the Major and Minor scale.
        if (harmonyName === "Ionian") {harmonyName += " (Major Scale)"}
        else if (harmonyName === "Aeolian") {harmonyName += " (Minor Scale)"}

        return harmonyName;
    }

    function addButtonToHarmonyArray(harmonyType, harmony, button) {
        const isTriad = harmonyType === 'Triad';
        const isSeventhChord = harmonyType === 'Seventh Chord';
        const isMajorMode = (MAJOR_MODES.includes(harmony));

        if (isTriad) {triads.push(button)}
        else if (isSeventhChord) {seventhChords.push(button)}
        else if (isMajorMode) {majorModes.push(button)}
        else {scales.push(button)}
    }

    createSelectHarmonyFields();

    function selectHarmonyButtonText() {
        const harmonyName = props.currentRootAndHarmony;
        const harmonyType = getHarmonyType(props.harmonyData, props.harmony);

        let harmonyButtonText = harmonyName;

        if(harmonyType === "Scale") {harmonyButtonText += " Scale"}
        else {harmonyButtonText += " Chord"}

        return harmonyButtonText;
    }

    return (
        <div>
            <Modal
                opened={opened}
                onClose={close}
                size="auto"
                centered>
                <div className="select-harmony-overlay">
                    <div className="select-harmony-overlay-column">
                        <div className="select-harmony-overlay-column-title">
                            <h2>Major Modes</h2>
                        </div>
                        <div>
                            <Button.Group orientation="vertical">
                                {majorModes}
                            </Button.Group>
                        </div>
                    </div>
                    <div className="select-harmony-overlay-column">
                        <div className="select-harmony-overlay-column-title">
                            <h2>Other Scales</h2>
                        </div>
                        <Button.Group orientation="vertical">
                            {scales}
                        </Button.Group>
                    </div>

                    <div className="select-harmony-overlay-column">
                        <div className="select-harmony-overlay-column-title">
                            <h2>Triads</h2>
                        </div>
                        <Button.Group orientation="vertical">
                            {triads}
                        </Button.Group>
                    </div>
                    <div className="select-harmony-overlay-column">
                        <div className="select-harmony-overlay-column-title">
                            <h2>Seventh Chords</h2>
                        </div>
                        <Button.Group orientation="vertical">
                            {seventhChords}
                        </Button.Group>
                    </div>
                </div>

            </Modal>

            <Group position="center">
                <Button
                    leftIcon={<IconMenu2 />}
                    onClick={open}
                    variant="filled">
                    {selectHarmonyButtonText()}
                </Button>
            </Group>
        </div>
    );
}

