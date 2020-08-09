package team.cocopalm.PetitionVisualizer.model;

import java.time.LocalDateTime;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Post {
	private int post_id;
	private int category_id;
	private String title;
	private LocalDateTime start_date;
	private LocalDateTime end_date;
	private int agree_count;
	private int is_new;
}
