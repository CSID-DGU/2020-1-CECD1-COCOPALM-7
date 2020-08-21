package team.cocopalm.PetitionVisualizer.model;

import java.time.LocalDateTime;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CategoryPostCount {
	private int category_id;
	private LocalDateTime start_date;
	private int agree_sum;
	private int post_sum;
}
