package tanneroconnor.dev.theshredshed.musictheory;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Component;
import tanneroconnor.dev.theshredshed.musictheory.notes.Note;
import tanneroconnor.dev.theshredshed.musictheory.harmony.Harmony;
import tanneroconnor.dev.theshredshed.musictheory.harmony.HarmonyWithRoot;

import java.util.Arrays;

import static tanneroconnor.dev.theshredshed.musictheory.Utility.ROOT_NOTES;
import static tanneroconnor.dev.theshredshed.musictheory.Utility.snakeToCamelCase;

@Component
public class HarmonyToJsonConverter {
    @Cacheable("musicTheoryDataCache")
    public String convertHarmonyToJson() {

        ObjectMapper mapper = new ObjectMapper();
        ObjectNode parentObject = mapper.createObjectNode();
        ObjectNode harmoniesObject = mapper.createObjectNode();

        for (Harmony harmony : Harmony.values()) {
            ObjectNode harmonyObject = mapHarmonyDataToHarmonyObject(mapper, harmony);
            ObjectNode rootsObject = mapper.createObjectNode();

            for (Note root : ROOT_NOTES) {
                HarmonyWithRoot currentHarmonyWithRoot = new HarmonyWithRoot(root, harmony);
                Note[] notesInHarmony = currentHarmonyWithRoot.getNotes();

                ArrayNode notes = mapper.createArrayNode();
                for(Note note : notesInHarmony) {
                    notes.add(note.toString());
                }

                rootsObject.set(root.toString(), notes);

            }
            harmonyObject.set("roots", rootsObject);
            harmoniesObject.set(snakeToCamelCase(harmony.name()), harmonyObject);
        }

        parentObject.set("harmony", harmoniesObject);


        String jsonString;
        try {
            jsonString = mapper.writeValueAsString(parentObject);
            return jsonString;
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }

    private static ObjectNode mapHarmonyDataToHarmonyObject(ObjectMapper mapper, Harmony harmony) {

        ObjectNode harmonyObject = mapper.createObjectNode();

        String intervals = Arrays.toString(harmony.getIntervals());
        String scaleDegrees = Arrays.toString(harmony.getScaleDegrees());
        String harmonyType = harmony.getHarmonyType().toString();
        String harmonyName = harmony.toString();

        harmonyObject.put("intervals", intervals);
        harmonyObject.put("scaleDegrees", scaleDegrees);
        harmonyObject.put("harmonyType", harmonyType);
        harmonyObject.put("harmonyName", harmonyName);

        return harmonyObject;
    }
}
