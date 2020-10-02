package team.cocopalm.PetitionVisualizer.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class KeywordDetailController {
	
	@GetMapping("/keyword")
	public String DetailOfKeyword(Model model) {
		model.addAttribute("keyword", "");
		return "keywordDetail/index";
	}
	
	@GetMapping("/keyword/{keyword}")
	public String DetailOfKeyword(@PathVariable("keyword") String keyword, Model model) {		
		model.addAttribute("keyword", keyword);
		
		return "keywordDetail/index";
	}
}

