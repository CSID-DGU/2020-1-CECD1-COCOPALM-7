package team.cocopalm.PetitionVisualizer.model;

public class CategoryPostCount {
	private int category_id;
	private String start_date;
	private int agree_sum;
	private int post_sum;
	public int getCategory_id() {
		return category_id;
	}
	public void setCategory_id(int category_id) {
		this.category_id = category_id;
	}
	public String getStart_date() {
		return start_date;
	}
	public void setStart_date(String start_date) {
		this.start_date = start_date;
	}
	public int getAgree_sum() {
		return agree_sum;
	}
	public void setAgree_sum(int agree_sum) {
		this.agree_sum = agree_sum;
	}
	public int getPost_sum() {
		return post_sum;
	}
	public void setPost_sum(int post_sum) {
		this.post_sum = post_sum;
	}
	@Override
	public String toString() {
		return "CategoryPostCount [category_id=" + category_id + ", start_date=" + start_date + ", agree_sum="
				+ agree_sum + ", post_sum=" + post_sum + "]";
	}
}
