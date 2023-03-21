package tanneroconnor.dev.theshredshed.musictheory.intervals;

import static tanneroconnor.dev.theshredshed.musictheory.intervals.IntervalQuality.*;

public enum Interval {
    P1(PERFECT, 1, "1", 0),
    m2(MINOR, 2, "b2", 1),
    M2(MAJOR, 2, "2", 2),
    m3(MINOR, 3, "b3", 3),
    M3(MAJOR, 3, "3", 4),
    P4(PERFECT, 4, "4", 5),
    A4(AUGMENTED, 4, "#4", 6),
    d5(DIMINISHED, 5, "b5", 6),
    P5(PERFECT, 5, "5", 7),
    A5(AUGMENTED, 5, "#5", 8),
    m6(MINOR, 6, "b6", 8),
    M6(MAJOR, 6, "6", 9),
    d7(DIMINISHED, 7, "bb7", 9),
    m7(MINOR, 7, "b7", 10),
    M7(MAJOR, 7, "7", 11);



    final private IntervalQuality intervalQuality;
    final private int intervalNumber;
    final private String scaleDegree;
    final private int numberOfHalfSteps;

    Interval(IntervalQuality intervalQuality, int intervalNumber, String scaleDegree, int numberOfHalfSteps) {
        this.intervalQuality = intervalQuality;
        this.intervalNumber = intervalNumber;
        this.scaleDegree = scaleDegree;
        this.numberOfHalfSteps = numberOfHalfSteps;
    }

    public String getScaleDegree() {
        return scaleDegree;
    }

    public IntervalQuality getIntervalQuality() {
        return intervalQuality;
    }

    public int getIntervalNumber() {
        return intervalNumber;
    }

    public int getNumberOfHalfSteps() {
        return numberOfHalfSteps;
    }


}
