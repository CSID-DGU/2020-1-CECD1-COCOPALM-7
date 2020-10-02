package team.cocopalm.PetitionVisualizer.model;

public class Keyword {
	private String keyword;
	private int agree_sum;
	private int post_sum;
	private int score;
	public int getScore() {
		return score;
	}
	public void setScore(int score) {
		this.score = score;
	}
	public String getKeyword() {
		return keyword;
	}
	public void setKeyword(String keyword) {
		this.keyword = keyword;
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
		return "Keyword [keyword=" + keyword + ", agree_sum=" + agree_sum + ", post_sum=" + post_sum + ", score="
				+ score + "]";
	}
}
