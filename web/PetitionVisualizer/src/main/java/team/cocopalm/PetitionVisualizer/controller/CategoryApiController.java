package team.cocopalm.PetitionVisualizer.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import team.cocopalm.PetitionVisualizer.model.IncrementOfCategory;
import team.cocopalm.PetitionVisualizer.model.Keyword;
import team.cocopalm.PetitionVisualizer.model.Post;
import team.cocopalm.PetitionVisualizer.service.CategoryService;
import team.cocopalm.PetitionVisualizer.service.KeywordService;
import team.cocopalm.PetitionVisualizer.service.PostService;

@RestController
@RequestMapping("/api/category")
public class CategoryApiController {
	@Autowired PostService postService;
	@Autowired KeywordService keywordService;
	@Autowired CategoryService categoryService;
	
	@GetMapping("/bestPetition")
	public Post getBestPetition(@RequestParam int categoryId) throws Exception {
		return postService.getBestCategoryPetition(categoryId);
	}
	
	@GetMapping("/mostPostKeyword")
	public Keyword getMostPostKeyword(@RequestParam int categoryId) throws Exception {
		return keywordService.selectCategoryMostPostKeyword(categoryId);
	}
	
	@GetMapping("/mostAgreeKeyword")
	public Keyword getMostAgreeKeyword(@RequestParam int categoryId) throws Exception {
		return keywordService.selectCategoryMostAgreeKeyword(categoryId);
	}
	
	@GetMapping("/ranking")
	public List<Keyword> getKeywordRankingByCategory(@RequestParam int categoryId) throws Exception {
		return keywordService.selectRankingByCategory(categoryId);
	}
	
	@GetMapping("/increment")
	public List<IncrementOfCategory> getCategoryIncrement(@RequestParam int categoryId) throws Exception {
		return categoryService.selectCategoryIncrement(categoryId);
	}
}
