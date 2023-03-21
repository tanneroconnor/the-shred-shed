import {Grid} from '@mantine/core';
import RootButton from "./RootButton.jsx";

export default function MenuRootSelect(props) {


    const rootNotes = ['A#', '' , 'C#', 'D#',  '' , 'F#', 'G#',
                       'A' ,'B' , 'C' , 'D' , 'E' , 'F' , 'G' ,
                       'Ab','Bb',  '' , 'Db', 'Eb',  '' , 'Gb']


    function handleClick(noteName) {
        props.handleRootButtonClick(noteName);
    }

    const rootNoteButtons = rootNotes.map((rootNote, index) => {
        return (
            <Grid.Col span={2}>
                <RootButton
                    selectedColor={props.selectedColor}
                    variant={props.variant}
                    isDarkMode={props.isDarkMode}
                    key={index}
                    selectedRootNote={props.rootNote}
                    noteName={rootNote}
                    handleClick={handleClick}
                />
            </Grid.Col>
        )
    })

    return (
        <div className="root-menu-container">
                <Grid
                    columns={14}
                    gutter={10}
                    align="center"
                    justify="space-between">

                    {rootNoteButtons}

                </Grid>
        </div>
    );
}