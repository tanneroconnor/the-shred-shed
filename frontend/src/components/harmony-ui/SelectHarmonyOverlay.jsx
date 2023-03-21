import React from 'react'
import {Button, Group, Modal} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import {getHarmonyName, getHarmonyType} from "../../dataFunctions.js";
import {IconMenu2} from "@tabler/icons-react";
import "../../App.css"


export default function SelectHarmonyOverlay(props) {

    const [opened, { open, close }] = useDisclosure(false);

    let triads = [];
    let seventhChords = [];
    let scales = [];

    function createSelectHarmonyFields() {
        if (props.harmonyData) {
            for(const harmony in props.harmonyData) {

                const currentHarmonyType = getHarmonyType(props.harmonyData, harmony);
                const currentHarmonyName = getHarmonyName(props.harmonyData, harmony);

                const currentButton = (
                        <Button
                            variant={props.harmony === harmony ? "filled" : "default"}
                            onClick={() => props.handleHarmonyChange(harmony)}>
                            {currentHarmonyName}
                        </Button>
                )

                if (currentHarmonyType === 'Triad') {triads.push(currentButton)}
                else if (currentHarmonyType === 'Seventh Chord') {seventhChords.push(currentButton)}
                else {scales.push(currentButton)}
            }
        }
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
                            <h2>Scales</h2>
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

