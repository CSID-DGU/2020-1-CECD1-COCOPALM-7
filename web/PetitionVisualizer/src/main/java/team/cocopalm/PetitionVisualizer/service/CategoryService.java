package team.cocopalm.PetitionVisualizer.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import team.cocopalm.PetitionVisualizer.mapper.CategoryMapper;
import team.cocopalm.PetitionVisualizer.model.Category;

@Service
public class CategoryService {
	@Autowired CategoryMapper mapper;
	
	public List<Category> selectAll() throws Exception {
		return mapper.selectAll(); 
	}
}
