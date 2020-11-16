package team.cocopalm.PetitionVisualizer.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import team.cocopalm.PetitionVisualizer.mapper.CategoryMapper;
import team.cocopalm.PetitionVisualizer.model.Category;
import team.cocopalm.PetitionVisualizer.model.IncrementOfCategory;

@Service
public class CategoryService {
	@Autowired CategoryMapper mapper;
	
	public List<Category> selectAll() throws Exception {
		return mapper.selectAll(); 
	}
	
	public String getCategory(int categoryNumber) throws Exception {
		return mapper.selectCategory(categoryNumber);
	}
	
	public List<IncrementOfCategory> selectCategoryIncrement(int categoryId) throws Exception {
		return mapper.selectCategoryIncrement(categoryId);
	}
}
