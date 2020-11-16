package team.cocopalm.PetitionVisualizer.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import team.cocopalm.PetitionVisualizer.model.IncrementOfKeyword;
import team.cocopalm.PetitionVisualizer.model.Keyword;

@Repository
@Mapper
public interface KeywordMapper {
    public int isExist(@Param("keyword") String keyword) throws Exception;
    public Keyword selectCategoryMostPostKeyword(@Param("categoryId") int categoryId) throws Exception;
    public Keyword selectCategoryMostAgreeKeyword(@Param("categoryId") int categoryId) throws Exception;
    public List<Keyword> selectKeywordTop3ByDay() throws Exception;
    public List<Keyword> selectKeywordTop3ByWeek() throws Exception;
    public List<Keyword> selectKeywordTop3ByMonth() throws Exception;
    public Map<String, Object> getCountAllNotExpiredPost() throws Exception;
    public Map<String, Object> getAggrKeywordNotExpiredPost(@Param("keyword") String keyword) throws Exception;
    public Map<String, Object> keywordMostPostDay(@Param("keyword") String keyword) throws Exception;
    public Map<String, Object> keywordMostAgreeMoment(@Param("keyword") String keyword) throws Exception;
    public List<Keyword> selectRanking() throws Exception;
    public List<Keyword> selectRankingByCategoryDay(@Param("categoryId") int categoryId) throws Exception;
    public List<Keyword> selectRankingByCategoryHour(@Param("categoryId") int categoryId) throws Exception;
    public List<IncrementOfKeyword> selectIncrementOfKeywordByDay(@Param("keyword") String keyword) throws Exception;
    public List<IncrementOfKeyword> selectIncrementOfKeywordByWeek(@Param("keyword") String keyword) throws Exception;
    public List<IncrementOfKeyword> selectIncrementOfKeywordByMonth(@Param("keyword") String keyword) throws Exception;
}