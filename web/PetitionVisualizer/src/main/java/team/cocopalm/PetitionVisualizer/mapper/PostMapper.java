package team.cocopalm.PetitionVisualizer.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import team.cocopalm.PetitionVisualizer.model.Post;

@Repository
@Mapper
public interface PostMapper {
    public Post selectMostAgreePetitionByKeyword(@Param("keyword") String keyword, @Param("isNew") int isNew) throws Exception;
    public Map<String, Object> getStatusOfKeyword(@Param("keyword") String keyword, @Param("isNew") int isNew) throws Exception;
    public String test(@Param("keyword") String keyword) throws Exception;
    public List<Post> selectRelatedPetitions(@Param("keyword") String keyword) throws Exception;
    public Post selectBestCategoryPetition(@Param("categoryId") int categoryId) throws Exception;
    public Post selectSummaryOfBestNewPetiton(@Param("keyword") String keyword) throws Exception;
}