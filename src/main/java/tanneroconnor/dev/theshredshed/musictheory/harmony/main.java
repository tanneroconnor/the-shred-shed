package tanneroconnor.dev.theshredshed.musictheory.harmony;

import static tanneroconnor.dev.theshredshed.musictheory.Utility.snakeToCamelCase;

public class main {
    public static void main(String[] args) {
        System.out.println(Harmony.MELODIC_MINOR.toString());
        System.out.println(snakeToCamelCase(Harmony.MELODIC_MINOR.toString()));
    }
}
