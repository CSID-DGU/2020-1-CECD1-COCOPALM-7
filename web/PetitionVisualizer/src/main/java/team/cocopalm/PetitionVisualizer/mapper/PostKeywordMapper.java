package team.cocopalm.PetitionVisualizer.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import team.cocopalm.PetitionVisualizer.model.PostKeyword;

@Repository
@Mapper
public interface PostKeywordMapper {
    public List<PostKeyword> test() throws Exception;
}