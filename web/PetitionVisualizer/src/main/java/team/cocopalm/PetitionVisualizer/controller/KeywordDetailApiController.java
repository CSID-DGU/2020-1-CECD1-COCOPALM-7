package team.cocopalm.PetitionVisualizer.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import team.cocopalm.PetitionVisualizer.model.Post;
import team.cocopalm.PetitionVisualizer.model.PostKeyword;
import team.cocopalm.PetitionVisualizer.service.KeywordService;
import team.cocopalm.PetitionVisualizer.service.PostKeywordService;
import team.cocopalm.PetitionVisualizer.service.PostService;

@RestController
@RequestMapping("/api/keyword")
public class KeywordDetailApiController {
	@Autowired PostService postService;
	@Autowired PostKeywordService postKeywordService;
	@Autowired KeywordService keywordService;
	
	// ex) http://.../keyword/bestPetitions?keyword=코로나
	@GetMapping("/bestPetitions")
	public List<Post> BestPetitions(@RequestParam String keyword) throws Exception {
		
		List<Post> posts = new ArrayList<Post>();
		
		// 만료 이전 청원 중 가장 많은 동의
		boolean isNew = true;
		
		posts.add(postService.selectMostAgreePetitionByKeyword(keyword, isNew));
		
		// 만료 된 청원 중 가장 많은 동의
		isNew = false;
		posts.add(postService.selectMostAgreePetitionByKeyword(keyword, isNew));
		
		return posts;
	}
	
	@GetMapping("/status")
	public Map<String, Object> keywordStatus(@RequestParam String keyword) throws Exception {
		
		boolean isNew = false;
		// keyword의 상태를 찾는 것이지만 post에서 검색하는게 더 명확함
		Map<String, Object> status = postService.getStatusOfKeyword(keyword, isNew);
		return status;
	}
	
	@GetMapping("/news")
	public ArrayList<HashMap<String, String>> keywordNews(@RequestParam String keyword) throws Exception {
		
        return keywordService.naverNews(keyword);
	}
	
	// 관련 청원 전체 목록
	@GetMapping("/related")
	public List<Post> relatedPetitions(@RequestParam String keyword) throws Exception {
		return postService.selectRelatedPetitions(keyword);
	}
	
	@GetMapping("/isExist")
	public boolean isExist(@RequestParam String keyword) throws Exception {
		return keywordService.isExist(keyword);
	}
}
