package tanneroconnor.dev.theshredshed.musictheory.harmony;



import tanneroconnor.dev.theshredshed.musictheory.intervals.Interval;

import java.util.ArrayList;
import java.util.List;

import static tanneroconnor.dev.theshredshed.musictheory.Utility.snakeToTitleCase;
import static tanneroconnor.dev.theshredshed.musictheory.intervals.Interval.*;
import static tanneroconnor.dev.theshredshed.musictheory.harmony.HarmonyType.*;

public enum Harmony {

    // Other Core Scales
    MELODIC_MINOR(new Interval[]{P1, M2, m3, P4, P5, M6, M7}, SCALE),
    HARMONIC_MINOR(new Interval[]{P1, M2, m3, P4, P5, m6, M7}, SCALE),

    // Major Modes
    IONIAN(new Interval[]{P1, M2, M3, P4, P5, M6, M7}, SCALE),
    DORIAN(new Interval[]{P1, M2, m3, P4, P5, M6, m7}, SCALE),
    PHRYGIAN(new Interval[]{P1, m2, m3, P4, P5, m6, m7}, SCALE),
    LYDIAN(new Interval[]{P1, M2, M3, A4, P5, M6, M7}, SCALE),
    MIXOLYDIAN(new Interval[]{P1, M2, M3, P4, P5, M6, m7}, SCALE),
    AEOLIAN(new Interval[]{P1, M2, m3, P4, P5, m6, m7}, SCALE),
    LOCRIAN(new Interval[]{P1, m2, m3, P4, d5, m6, m7}, SCALE),

    // Pentatonic Scales
    MAJOR_PENTATONIC(new Interval[]{P1, M2, M3, P5, M6}, SCALE),
    MINOR_PENTATONIC(new Interval[]{P1, m3, P4, P5, m7}, SCALE),

    // Triads
    MAJOR(new Interval[]{P1, M3, P5}, TRIAD),
    MINOR(new Interval[]{P1, m3, P5}, TRIAD),
    AUGMENTED(new Interval[]{P1, M3, A5}, TRIAD),
    DIMINISHED(new Interval[]{P1, m3, d5}, TRIAD),
    SUS_2(new Interval[]{P1, M2, P5}, TRIAD),
    SUS_4(new Interval[]{P1, P4, P5}, TRIAD),

    // Seventh Chords
    MAJOR_7(new Interval[]{P1, M3, P5, M7}, SEVENTH_CHORD),
    DOMINANT_7(new Interval[]{P1, M3, P5, m7}, SEVENTH_CHORD),
    MINOR_7(new Interval[]{P1, m3, P5, m7}, SEVENTH_CHORD),
    HALF_DIMINISHED(new Interval[]{P1, m3, d5, m7}, SEVENTH_CHORD),
    FULLY_DIMINISHED(new Interval[]{P1, m3, d5, d7}, SEVENTH_CHORD),
    MINOR_MAJOR_7(new Interval[]{P1, m3, P5, M7}, SEVENTH_CHORD),
    AUGMENTED_MAJOR_7(new Interval[]{P1, M3, A5, M7}, SEVENTH_CHORD),
    DIMINISHED_MAJOR_7(new Interval[]{P1, m3, d5, M7}, SEVENTH_CHORD);
    private final Interval[] intervals;
    private final HarmonyType harmonyType;
    Harmony(Interval[] intervals, HarmonyType harmonyType) {
        this.intervals = intervals;
        this.harmonyType = harmonyType;
    }

    public Interval[] getIntervals() {
        return intervals;
    }

    public String[] getScaleDegrees() {
        List<String> scaleDegrees = new ArrayList<>(this.intervals.length);
        for (Interval interval : this.intervals) {
            scaleDegrees.add(interval.getScaleDegree());
        }
        return scaleDegrees.toArray(String[]::new);
    }

    public HarmonyType getHarmonyType() {
        return harmonyType;
    }

    @Override
    public String toString() {
       return snakeToTitleCase(this.name());
    }

}
