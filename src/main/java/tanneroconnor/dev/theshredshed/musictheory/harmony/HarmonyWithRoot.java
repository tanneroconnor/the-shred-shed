package tanneroconnor.dev.theshredshed.musictheory.harmony;

import tanneroconnor.dev.theshredshed.musictheory.intervals.Interval;
import tanneroconnor.dev.theshredshed.musictheory.notes.Note;
import static tanneroconnor.dev.theshredshed.musictheory.Utility.ROOT_NOTES;

public class HarmonyWithRoot {
    private Note root;
    private Harmony harmony;

    public HarmonyWithRoot(Note root, Harmony harmony) {
        if (!ROOT_NOTES.contains(root)) {
            throw new IllegalArgumentException("Invalid root note");
        }
        this.root = root;
        this.harmony = harmony;
    }

    public Note[] getNotes() {
        Interval[] intervalsInHarmony = this.harmony.getIntervals();
        int numberOfNotesInHarmony = this.harmony.getIntervals().length;
        Note[] notesInHarmony = new Note[numberOfNotesInHarmony];

        for (int i = 0; i < numberOfNotesInHarmony; i++) {
            notesInHarmony[i] = this.root.getNoteAscending(intervalsInHarmony[i]);
        }

        return notesInHarmony;
    }

    public Interval[] getIntervals() {
        return this.harmony.getIntervals();
    }

    public String[] getScaleDegrees() {return this.harmony.getScaleDegrees();}

    @Override
    public String toString() {
        return root.toString() + " " + harmony.toString();
    }

}
