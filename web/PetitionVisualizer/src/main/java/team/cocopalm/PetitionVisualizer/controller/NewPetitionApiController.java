package team.cocopalm.PetitionVisualizer.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import team.cocopalm.PetitionVisualizer.model.Keyword;
import team.cocopalm.PetitionVisualizer.service.KeywordService;

@RestController
@RequestMapping("/api/newPetition")
public class NewPetitionApiController {
	@Autowired KeywordService keywordService;
	
	@GetMapping("/keywordTop3")
	public List<Keyword> getKeywordTop3() throws Exception {
		return keywordService.selectKeywordTop3();
	}
	
	@GetMapping("/metaData")
	public Map<String, Object> getMetaData(@RequestParam String keyword) throws Exception {
		return keywordService.selectMetaData(keyword);
	}
}
