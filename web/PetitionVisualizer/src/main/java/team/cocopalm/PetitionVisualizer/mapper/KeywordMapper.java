package team.cocopalm.PetitionVisualizer.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import team.cocopalm.PetitionVisualizer.model.Keyword;

@Repository
@Mapper
public interface KeywordMapper {
    public int isExist(@Param("keyword") String keyword) throws Exception;
    public Keyword selectCategoryMostPostKeyword(@Param("categoryId") int categoryId) throws Exception;
    public Keyword selectCategoryMostAgreeKeyword(@Param("categoryId") int categoryId) throws Exception;
    public List<Keyword> selectKeywordTop3() throws Exception;
    public Map<String, Object> getCountAllNotExpiredPost() throws Exception;
    public Map<String, Object> getAggrKeywordNotExpiredPost(@Param("keyword") String keyword) throws Exception;
    public Map<String, Object> keywordMostPostDay(@Param("keyword") String keyword) throws Exception;
}