package team.cocopalm.PetitionVisualizer.model;

public class IncrementOfCategory {
	private String collect_time;
	private int agree_increment;
	private int post_increment;
	public String getCollect_time() {
		return collect_time;
	}
	public void setCollect_time(String collect_time) {
		this.collect_time = collect_time;
	}
	public int getAgree_increment() {
		return agree_increment;
	}
	public void setAgree_increment(int agree_increment) {
		this.agree_increment = agree_increment;
	}
	public int getPost_increment() {
		return post_increment;
	}
	public void setPost_increment(int post_increment) {
		this.post_increment = post_increment;
	}
	@Override
	public String toString() {
		return "IncrementOfCategory [collect_time=" + collect_time + ", agree_increment=" + agree_increment
				+ ", post_increment=" + post_increment + "]";
	}
}
