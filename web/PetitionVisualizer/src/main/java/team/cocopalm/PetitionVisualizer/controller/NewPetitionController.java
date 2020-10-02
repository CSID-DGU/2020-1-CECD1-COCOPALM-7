package team.cocopalm.PetitionVisualizer.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

// 만료 이전 청원 컨트롤러
@Controller
public class NewPetitionController {
	
	@RequestMapping("/")
	public String Home() {
		// newPetition.jsp 반환
		return "newPetition/index";
	}
}
