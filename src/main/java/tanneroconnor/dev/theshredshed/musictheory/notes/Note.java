package tanneroconnor.dev.theshredshed.musictheory.notes;

import tanneroconnor.dev.theshredshed.musictheory.intervals.Interval;

import java.util.*;

import static tanneroconnor.dev.theshredshed.musictheory.Utility.MAX_NUMBER_OF_NOTES_WITH_PITCH_CLASS;
import static tanneroconnor.dev.theshredshed.musictheory.Utility.NUMBER_OF_ENHARMONIC_PITCHES;

public enum Note {

    A_DOUBLE_FLAT(LetterName.A, Accidental.DOUBLE_FLAT),
    B_DOUBLE_FLAT(LetterName.B, Accidental.DOUBLE_FLAT),
    C_DOUBLE_FLAT(LetterName.C, Accidental.DOUBLE_FLAT),
    D_DOUBLE_FLAT(LetterName.D, Accidental.DOUBLE_FLAT),
    E_DOUBLE_FLAT(LetterName.E, Accidental.DOUBLE_FLAT),
    F_DOUBLE_FLAT(LetterName.F, Accidental.DOUBLE_FLAT),
    G_DOUBLE_FLAT(LetterName.G, Accidental.DOUBLE_FLAT),

    A_FLAT(LetterName.A, Accidental.FLAT),
    B_FLAT(LetterName.B, Accidental.FLAT),
    C_FLAT(LetterName.C, Accidental.FLAT),
    D_FLAT(LetterName.D, Accidental.FLAT),
    E_FLAT(LetterName.E, Accidental.FLAT),
    F_FLAT(LetterName.F, Accidental.FLAT),
    G_FLAT(LetterName.G, Accidental.FLAT),

    A(LetterName.A, Accidental.NATURAL),
    B(LetterName.B, Accidental.NATURAL),
    C(LetterName.C, Accidental.NATURAL),
    D(LetterName.D, Accidental.NATURAL),
    E(LetterName.E, Accidental.NATURAL),
    F(LetterName.F, Accidental.NATURAL),
    G(LetterName.G, Accidental.NATURAL),

    A_SHARP(LetterName.A, Accidental.SHARP),
    B_SHARP(LetterName.B, Accidental.SHARP),
    C_SHARP(LetterName.C, Accidental.SHARP),
    D_SHARP(LetterName.D, Accidental.SHARP),
    E_SHARP(LetterName.E, Accidental.SHARP),
    F_SHARP(LetterName.F, Accidental.SHARP),
    G_SHARP(LetterName.G, Accidental.SHARP),

    A_DOUBLE_SHARP(LetterName.A, Accidental.DOUBLE_SHARP),
    B_DOUBLE_SHARP(LetterName.B, Accidental.DOUBLE_SHARP),
    C_DOUBLE_SHARP(LetterName.C, Accidental.DOUBLE_SHARP),
    D_DOUBLE_SHARP(LetterName.D, Accidental.DOUBLE_SHARP),
    E_DOUBLE_SHARP(LetterName.E, Accidental.DOUBLE_SHARP),
    F_DOUBLE_SHARP(LetterName.F, Accidental.DOUBLE_SHARP),
    G_DOUBLE_SHARP(LetterName.G, Accidental.DOUBLE_SHARP);



    private final LetterName letterName;
    private final Accidental accidental;
    private final int pitchClass;

    Note(LetterName letterName, Accidental accidental) {
        this.letterName = letterName;
        this.accidental = accidental;
        this.pitchClass = Math.floorMod(letterName.getPitchClass() + accidental.getPitchClassModifier(), NUMBER_OF_ENHARMONIC_PITCHES);
    }

    public int getPitchClass() {
        return pitchClass;
    }

    @Override
    public String toString() {
        return this.letterName.toString() + this.accidental.toString();
    }

    public LetterName getLetterName() {
        return this.letterName;
    }

    public Note getNoteAscending(Interval intervalAscending) {
        Note noteAbove = null;

        // Pitch Class is to determine the right pool of Enharmonic Notes
        int numberOfHalfSteps = intervalAscending.getNumberOfHalfSteps();
        int noteAbovePitchClass = (this.getPitchClass() + numberOfHalfSteps) % (NUMBER_OF_ENHARMONIC_PITCHES);

        LetterName letterNameAscending = getLetterNameAscending(intervalAscending);

        for (Note note : getNotesWithPitchClass(noteAbovePitchClass)) {
            // This selects the Note with the correct Letter Name from the array of enharmonic Notes
            if (letterNameAscending.getLetter().equals(note.getLetterName().getLetter())) {
                noteAbove = note;
                break;
            }
        }
        return noteAbove;
    }

    public static Note[] getNotesWithPitchClass(int givenPitchClass) {
        if(givenPitchClass < 0 || givenPitchClass > 11) {
            throw new IllegalArgumentException();
        }
        List<Note> notesWithPitchClass = new ArrayList<>(MAX_NUMBER_OF_NOTES_WITH_PITCH_CLASS);
        for (Note note : Note.values()) {
            if (note.getPitchClass() == givenPitchClass)
                notesWithPitchClass.add(note);
        }
        return notesWithPitchClass.toArray(Note[]::new);
    }

    private LetterName getLetterNameAscending(Interval intervalAscending) {
        LetterName startingNoteLetterName = this.getLetterName();
        LetterName[] letterNames = LetterName.values();

        int startingNoteIndex = Arrays.binarySearch(letterNames, startingNoteLetterName);
        int letterNameAboveIndex = (startingNoteIndex + intervalAscending.getIntervalNumber() - 1) % letterNames.length;

        return letterNames[letterNameAboveIndex];
    }

}
