package tanneroconnor.dev.theshredshed.musictheory;

import tanneroconnor.dev.theshredshed.musictheory.notes.Note;
import static tanneroconnor.dev.theshredshed.musictheory.notes.Note.*;

import java.util.Arrays;
import java.util.List;

public class Utility {

    public static final int NUMBER_OF_ENHARMONIC_PITCHES = 12;
    public static final int MAX_NUMBER_OF_NOTES_WITH_PITCH_CLASS = 3;

    public static final List<Note> ROOT_NOTES = Arrays.asList(A, B, C, D, E, F, G,
            A_SHARP, C_SHARP, D_SHARP, F_SHARP, G_SHARP,
            A_FLAT, B_FLAT, D_FLAT, E_FLAT, G_FLAT);

    public static String snakeToCamelCase(String stringToConvert) {
        String[] words = stringToConvert.split("_");
        StringBuilder sb = new StringBuilder();
        for (String word : words) {
            if (!word.isEmpty()) {
                sb.append(Character.toUpperCase(word.charAt(0)));
                sb.append(word.substring(1).toLowerCase());
            }
        }
        sb.setCharAt(0, Character.toLowerCase(sb.charAt(0)));
        return sb.toString().trim();
    }

    public static String snakeToTitleCase(String stringToConvert) {
        String[] words = stringToConvert.split("_");
        StringBuilder sb = new StringBuilder();
        for (String word : words) {
            if (!word.isEmpty()) {
                sb.append(Character.toUpperCase(word.charAt(0)));
                sb.append(word.substring(1).toLowerCase());
                sb.append(" ");
            }
        }
        return sb.toString().trim();
    }

}
