package team.cocopalm.PetitionVisualizer.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;
import team.cocopalm.PetitionVisualizer.model.Post;
import team.cocopalm.PetitionVisualizer.model.PostKeyword;
import team.cocopalm.PetitionVisualizer.service.PostKeywordService;
import team.cocopalm.PetitionVisualizer.service.PostService;

@Slf4j
@RestController
public class KeywordDetailRESTController {
	@Autowired PostService postService;
	@Autowired PostKeywordService postKeywordService;
	
	// ex) http://.../keyword/bestPetitions?keyword=코로나
	@GetMapping("/keyword/bestPetitions")
	public List<Post> BestPetitions(@RequestParam String keyword) throws Exception {
		log.info("[/keyword/bestPetitions] 매핑! >> keyword : " + keyword);
		
		List<Post> posts = new ArrayList<Post>();
		
		// 만료 이전 청원 중 가장 많은 동의 : is_new == true >>>>>>>>>>> 현재 false를 추후에 만료 이전 데이터가 생기면 true로 바꾸기
		posts.add(postService.selectMostAgreePetitionByKeyword(keyword, false));
		// 만료 된 청원 중 가장 많은 동의 : is_new == false
		posts.add(postService.selectMostAgreePetitionByKeyword(keyword, false));
		
		System.out.println(posts.get(0).getTitle());
		
		return posts;
	}
	
	// 테스트 용
	@GetMapping("/test")
	public List<PostKeyword> Test() throws Exception {
		log.info("테스트");
		
		return postKeywordService.test();
	}
}
