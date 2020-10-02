package team.cocopalm.PetitionVisualizer.model;

public class PostKeyword {
	private int post_id;
	private String keyword;
	public int getPost_id() {
		return post_id;
	}
	public void setPost_id(int post_id) {
		this.post_id = post_id;
	}
	public String getKeyword() {
		return keyword;
	}
	public void setKeyword(String keyword) {
		this.keyword = keyword;
	}
	@Override
	public String toString() {
		return "PostKeyword [post_id=" + post_id + ", keyword=" + keyword + "]";
	}
	
}
