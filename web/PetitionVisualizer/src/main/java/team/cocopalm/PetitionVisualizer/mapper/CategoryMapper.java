package team.cocopalm.PetitionVisualizer.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import team.cocopalm.PetitionVisualizer.model.Category;

@Repository
@Mapper
public interface CategoryMapper {
    public List<Category> selectAll() throws Exception;
}