package team.cocopalm.PetitionVisualizer.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import team.cocopalm.PetitionVisualizer.model.CategoryPostCount;

@Repository
@Mapper
public interface CategoryPostCountMapper {
    public List<CategoryPostCount> test() throws Exception;
}