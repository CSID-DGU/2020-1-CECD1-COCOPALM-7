package team.cocopalm.PetitionVisualizer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class PetitionVisualizerApplication {

	public static void main(String[] args) {
		SpringApplication.run(PetitionVisualizerApplication.class, args);
		System.out.println("Visualize petitions");
	}
}
