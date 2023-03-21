package tanneroconnor.dev.theshredshed.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import tanneroconnor.dev.theshredshed.musictheory.HarmonyToJsonConverter;

@RestController
public class MusicTheoryController {

    private final HarmonyToJsonConverter converter;
    private final ResourceLoader resourceLoader;

    @Autowired
    public MusicTheoryController(HarmonyToJsonConverter converter, ResourceLoader resourceLoader) {
        this.converter = converter;
        this.resourceLoader = resourceLoader;
    }

    @GetMapping("/")
    public ResponseEntity<Resource> getIndex() {
        Resource index = resourceLoader.getResource("classpath:/static/dist/index.html");
        return ResponseEntity.ok().contentType(MediaType.TEXT_HTML).body(index);
    }

    @GetMapping("/music-theory")
    public ResponseEntity<String> getMusicTheory() {
        return ResponseEntity.ok(converter.convertHarmonyToJson());
    }

}
