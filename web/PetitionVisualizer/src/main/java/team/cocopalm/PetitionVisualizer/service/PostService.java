package team.cocopalm.PetitionVisualizer.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import team.cocopalm.PetitionVisualizer.mapper.PostMapper;
import team.cocopalm.PetitionVisualizer.model.Post;

@Service
public class PostService {
	@Autowired PostMapper mapper;
	
	public Post selectMostAgreePetitionByKeyword(String keyword, boolean isNew) throws Exception {
		if(isNew) 
			return mapper.selectMostAgreePetitionByKeyword(keyword, 1);
		else
			return mapper.selectMostAgreePetitionByKeyword(keyword, 0);
	}
	
	public String test(String keyword) throws Exception {
		return mapper.test(keyword);
	}
}
