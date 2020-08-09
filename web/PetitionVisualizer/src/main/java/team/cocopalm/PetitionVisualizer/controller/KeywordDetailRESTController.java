package team.cocopalm.PetitionVisualizer.controller;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;
import team.cocopalm.PetitionVisualizer.model.Post;

@Slf4j
@RestController
public class KeywordDetailRESTController {
	@GetMapping("/keyword/bestPetitions")
	public ArrayList<Post> BestPetitions() {
		log.info("[/keyword/bestPetitions] 매핑!");
		ArrayList<Post> posts = new ArrayList<>();
		Post post = Post.builder()
				.post_id(590411)
				.category_id(16)
				.title("연대보증채권을 소각해주세요")
				.start_date(LocalDateTime.parse("2020-07-06 00:00:00", DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")))
				.end_date(LocalDateTime.parse("2020-08-05 00:00:00", DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")))
				.agree_count(514)
				.is_new(0)
				.build();
		posts.add(post);
		post = Post.builder()
				.post_id(590410)
				.category_id(2)
				.title("일용직 청년층들 피해 막아주세요.")
				.start_date(LocalDateTime.parse("2020-07-06 00:00:00", DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")))
				.end_date(LocalDateTime.parse("2020-08-05 00:00:00", DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")))
				.agree_count(291)
				.is_new(0)
				.build();
		posts.add(post);
		return posts;
	}
}
