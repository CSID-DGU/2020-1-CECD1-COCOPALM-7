package team.cocopalm.PetitionVisualizer.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import team.cocopalm.PetitionVisualizer.mapper.KeywordMapper;
import team.cocopalm.PetitionVisualizer.model.Keyword;

@Service
public class KeywordService {
	@Autowired KeywordMapper mapper;
	
	public List<Keyword> test() throws Exception {
		return mapper.test(); 
	}
}
