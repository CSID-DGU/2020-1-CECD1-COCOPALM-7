package team.cocopalm.PetitionVisualizer.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
public class KeywordDetailController {
	@RequestMapping("/keyword")
	public String Keyword() {
		log.info("log testing !");
		return "keyword";
	}
}
