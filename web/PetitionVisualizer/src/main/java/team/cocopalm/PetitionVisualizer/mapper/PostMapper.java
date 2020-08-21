package team.cocopalm.PetitionVisualizer.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import team.cocopalm.PetitionVisualizer.model.Post;

@Repository
@Mapper
public interface PostMapper {
    public Post selectMostAgreePetitionByKeyword(@Param("keyword") String keyword, @Param("isNew") int isNew) throws Exception;
    public String test(@Param("keyword") String keyword) throws Exception;
}