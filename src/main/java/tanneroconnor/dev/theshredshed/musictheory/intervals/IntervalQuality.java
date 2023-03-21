package tanneroconnor.dev.theshredshed.musictheory.intervals;

public enum IntervalQuality {

    DIMINISHED("d"),
    MINOR("m"),
    PERFECT("P"),
    MAJOR("M"),
    AUGMENTED("A");

    private final String abbreviation;

    IntervalQuality(String abbreviation) {
        this.abbreviation = abbreviation;
    }

}
