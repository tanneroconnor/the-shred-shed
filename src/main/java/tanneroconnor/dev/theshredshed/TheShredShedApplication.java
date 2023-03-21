package tanneroconnor.dev.theshredshed;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@EnableCaching
@SpringBootApplication
public class TheShredShedApplication {

    public static void main(String[] args) {
        SpringApplication.run(TheShredShedApplication.class, args);
    }

}
