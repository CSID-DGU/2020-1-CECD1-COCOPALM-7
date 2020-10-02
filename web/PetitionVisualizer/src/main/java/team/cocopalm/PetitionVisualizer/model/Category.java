package team.cocopalm.PetitionVisualizer.model;

public class Category {
	private int category_id;
	private String name;
	public int getCategory_id() {
		return category_id;
	}
	public void setCategory_id(int category_id) {
		this.category_id = category_id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	@Override
	public String toString() {
		return "Category [category_id=" + category_id + ", name=" + name + "]";
	}
}
