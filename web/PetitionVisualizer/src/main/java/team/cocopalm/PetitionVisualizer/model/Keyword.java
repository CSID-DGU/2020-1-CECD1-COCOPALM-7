package team.cocopalm.PetitionVisualizer.model;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Keyword {
	private String keyword;
	private int agree_sum;
	private int post_sum;
}
