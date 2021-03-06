package team.cocopalm.PetitionVisualizer.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import team.cocopalm.PetitionVisualizer.model.Category;
import team.cocopalm.PetitionVisualizer.model.IncrementOfCategory;

@Repository
@Mapper
public interface CategoryMapper {
    public List<Category> selectAll() throws Exception;
    public String selectCategory(@Param("categoryNumber") int categoryNumber) throws Exception;
    public List<IncrementOfCategory> selectCategoryIncrement(@Param("categoryId") int categoryId) throws Exception;
}