export const NUMBER_OF_STRINGS = 6;
export const STANDARD_TUNING = ['E', 'B', 'G', 'D', 'A', 'E'];

export const PITCH_CLASS_TO_NOTE_NAME = {
    0: ['C', 'Dbb', 'B#'],
    1: ['C#', 'Db', 'B##'],
    2: ['D', 'Ebb', 'C##'],
    3: ['D#', 'Eb'],
    4: ['E', 'Fb', 'D##'],
    5: ['F', 'Gbb', 'E#'],
    6: ['F#', 'Gb', 'E##'],
    7: ['G', 'Abb', 'F##'],
    8: ['G#', 'Ab'],
    9: ['A', 'Bbb', 'G##'],
    10: ['A#', 'Bb'],
    11: ['B', 'Cb', 'A##']
}

export const NOTE_NAME_TO_PITCH_CLASS = {
    'C': 0,
    'Dbb': 0,
    'B#': 0,
    'C#': 1,
    'Db': 1,
    'B##': 1,
    'D': 2,
    'Ebb': 2,
    'C##': 2,
    'D#': 3,
    'Eb': 3,
    'E': 4,
    'Fb': 4,
    'D##': 4,
    'F': 5,
    'Gbb': 5,
    'E#': 5,
    'F#': 6,
    'Gb': 6,
    'E##': 6,
    'G': 7,
    'Abb': 7,
    'F##': 7,
    'G#': 8,
    'Ab': 8,
    'A': 9,
    'Bbb': 9,
    'G##': 9,
    'A#': 10,
    'Bb': 10,
    'B': 11,
    'Cb': 11,
    'A##': 11
}

export const MAJOR_MODES = [
    "ionian", "dorian", "phrygian", "lydian", "mixolydian", "aeolian", "locrian"
]
