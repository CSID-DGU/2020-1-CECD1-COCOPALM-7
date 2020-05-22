package team.cocopalm.PetitionVisualizer.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.extern.slf4j.Slf4j;


// 만료 이전 청원 컨트롤러
@Slf4j // log 객체 자동 생성
@Controller
public class NewPetitionController {
	
	@RequestMapping("/")
	public String Home() {
		// @Slfj4로 생성된 log 객체 이용해서 log 남김
		log.info("[ / ] 경로 매핑!");
		
		// newPetition.jsp 반환
		return "newPetition";
	}
}
