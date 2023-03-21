package tanneroconnor.dev.theshredshed.musictheory.notes;

public enum LetterName {

    C(0, 'C'),
    D(2, 'D'),
    E(4, 'E'),
    F(5, 'F'),
    G(7, 'G'),
    A(9, 'A'),
    B(11, 'B');

    private final int pitchClass;
    private final char letter;

    LetterName(int pitchClass, char letter) {
        this.pitchClass = pitchClass;
        this.letter = letter;
    }

    public String getLetter() {
        return letter + "";
    }

    @Override
    public String toString() {
        return letter+"";
    }

    public int getPitchClass() {
        return pitchClass;
    }
}
