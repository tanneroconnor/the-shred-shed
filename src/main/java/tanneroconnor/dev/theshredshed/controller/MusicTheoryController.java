package tanneroconnor.dev.theshredshed.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import tanneroconnor.dev.theshredshed.musictheory.HarmonyToJsonConverter;

@RestController
public class MusicTheoryController {

    private final HarmonyToJsonConverter converter;

    @Autowired
    public MusicTheoryController(HarmonyToJsonConverter converter) {
        this.converter = converter;
    }

    @CrossOrigin("http://localhost:5173/")
    @GetMapping("/music-theory")
    public ResponseEntity<String> getMusicTheory() {

        return ResponseEntity.ok(converter.convertHarmonyToJson());
    }

}
