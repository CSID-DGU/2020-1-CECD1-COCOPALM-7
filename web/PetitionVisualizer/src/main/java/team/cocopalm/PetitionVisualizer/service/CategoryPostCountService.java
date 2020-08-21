package team.cocopalm.PetitionVisualizer.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import team.cocopalm.PetitionVisualizer.mapper.CategoryPostCountMapper;
import team.cocopalm.PetitionVisualizer.model.CategoryPostCount;

@Service
public class CategoryPostCountService {
	@Autowired CategoryPostCountMapper mapper;
	
	public List<CategoryPostCount> test() throws Exception {
		return mapper.test(); 
	}
}
