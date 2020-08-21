package team.cocopalm.PetitionVisualizer.model;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class PostKeyword {
	private int post_id;
	private String keyword;
}
