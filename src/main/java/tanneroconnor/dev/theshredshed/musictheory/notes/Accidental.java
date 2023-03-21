package tanneroconnor.dev.theshredshed.musictheory.notes;

public enum Accidental {

    DOUBLE_FLAT(-2, "bb"),
    FLAT(-1, "b"),
    NATURAL(0, ""),
    SHARP(1, "#"),
    DOUBLE_SHARP(2, "##");

    private final int pitchClassModifier;
    private final String symbol;

    private Accidental(int pitchClassModifier, String symbol) {
        this.pitchClassModifier = pitchClassModifier;
        this.symbol = symbol;
    }

    public int getPitchClassModifier() {
        return pitchClassModifier;
    }

    public String getSymbol() {
        return symbol;
    }

    @Override
    public String toString() {
        return this.symbol;
    }
}
