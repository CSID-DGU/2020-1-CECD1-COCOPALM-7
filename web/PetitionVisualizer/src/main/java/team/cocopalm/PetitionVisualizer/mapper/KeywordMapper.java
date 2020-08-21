package team.cocopalm.PetitionVisualizer.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import team.cocopalm.PetitionVisualizer.model.Keyword;

@Repository
@Mapper
public interface KeywordMapper {
    public List<Keyword> test() throws Exception;
}