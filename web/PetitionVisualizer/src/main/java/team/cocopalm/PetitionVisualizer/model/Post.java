package team.cocopalm.PetitionVisualizer.model;

public class Post {
	private int post_id;
	private int category_id;
	private String title;
	private String start_date;
	private String end_date;
	private int agree_count;
	private int is_new;
	private String summary;
	
	public String getSummary() {
		return summary;
	}
	public void setSummary(String summary) {
		this.summary = summary;
	}
	public int getPost_id() {
		return post_id;
	}
	public void setPost_id(int post_id) {
		this.post_id = post_id;
	}
	public int getCategory_id() {
		return category_id;
	}
	public void setCategory_id(int category_id) {
		this.category_id = category_id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getStart_date() {
		return start_date;
	}
	public void setStart_date(String start_date) {
		this.start_date = start_date;
	}
	public String getEnd_date() {
		return end_date;
	}
	public void setEnd_date(String end_date) {
		this.end_date = end_date;
	}
	public int getAgree_count() {
		return agree_count;
	}
	public void setAgree_count(int agree_count) {
		this.agree_count = agree_count;
	}
	public int getIs_new() {
		return is_new;
	}
	public void setIs_new(int is_new) {
		this.is_new = is_new;
	}
	@Override
	public String toString() {
		return "Post [post_id=" + post_id + ", category_id=" + category_id + ", title=" + title + ", start_date="
				+ start_date + ", end_date=" + end_date + ", agree_count=" + agree_count + ", is_new=" + is_new
				+ ", summary=" + summary + "]";
	}
}
