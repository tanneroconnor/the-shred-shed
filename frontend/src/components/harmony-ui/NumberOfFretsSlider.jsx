import { Slider } from '@mantine/core';

const marks = [
    { value: 3, label: '3' },
    { value: 5, label: '5' },
    { value: 7, label: '7' },
    { value: 9, label: '9' },
    { value: 12, label: '12' },
    { value: 15, label: '15' },
    { value: 17, label: '17' },
    { value: 19, label: '19' },
    { value: 24, label: '24' }
];

export default function NumberOfFretsSlider(props) {
    return (
        <>
            <Slider
                onChangeEnd={(fretNumber) => props.handleNumberOfFrets(fretNumber)}
                min={3}
                max={24}
                defaultValue={12}
                marks={marks} />
        </>
    );
}