package team.cocopalm.PetitionVisualizer.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import team.cocopalm.PetitionVisualizer.mapper.PostMapper;
import team.cocopalm.PetitionVisualizer.model.Post;

@Service
public class PostService {
	@Autowired PostMapper mapper;
	
	public Post selectMostAgreePetitionByKeyword(String keyword, boolean isNewBool) throws Exception {
		int isNew = isNewBool ? 1 : 0;
		return mapper.selectMostAgreePetitionByKeyword(keyword, isNew);
	}
	
	public Map<String, Object> getStatusOfKeyword(String keyword, boolean isNewBool) throws Exception {
		int isNew = isNewBool ? 1 : 0;
		return mapper.getStatusOfKeyword(keyword, isNew);
	}
	
	public String test(String keyword) throws Exception {
		return mapper.test(keyword);
	}
	
	public List<Post> getRelatedPetitions(String keyword) throws Exception {
		return mapper.selectRelatedPetitions(keyword);
	}
	
	public Post getBestCategoryPetition(int categoryId) throws Exception {
		return mapper.selectBestCategoryPetition(categoryId);
	}
	
	public Post getSummaryOfBestNewPetiton(String keyword) throws Exception {
		return mapper.selectSummaryOfBestNewPetiton(keyword);
	}
}
