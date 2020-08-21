package team.cocopalm.PetitionVisualizer.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import team.cocopalm.PetitionVisualizer.mapper.PostKeywordMapper;
import team.cocopalm.PetitionVisualizer.model.PostKeyword;

@Service
public class PostKeywordService {
	@Autowired PostKeywordMapper mapper;
	
	public List<PostKeyword> test() throws Exception {
		return mapper.test(); 
	}
}
