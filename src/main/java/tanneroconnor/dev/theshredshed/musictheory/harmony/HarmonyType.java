package tanneroconnor.dev.theshredshed.musictheory.harmony;

import static tanneroconnor.dev.theshredshed.musictheory.Utility.snakeToTitleCase;

public enum HarmonyType {
    SCALE,
    TRIAD,
    SEVENTH_CHORD;

    @Override
    public String toString() {
        return snakeToTitleCase(this.name());
    }

}
