package team.cocopalm.PetitionVisualizer.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class KeywordDetailController {
	
	@RequestMapping("/keyword")
	public String Keyword() {
		log.info("[ /keyword ] 매핑!");
		return "keywordDetail/index";
	}
}

