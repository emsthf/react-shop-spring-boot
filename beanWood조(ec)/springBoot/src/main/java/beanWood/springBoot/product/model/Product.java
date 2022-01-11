package beanWood.springBoot.product.model;

import beanWood.springBoot.category.model.Category;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String productName;
	private int price;
	private boolean isNew;
	private int sale;
	private int star;
	private String description;
	@ManyToOne
	@JoinColumn(name = "category_id")
	private Category category;

	@Builder
	public Product(Long id, String productName, int price, boolean isNew, int sale, int star, String description, Category category) {
		this.id = id;
		this.productName = productName;
		this.price = price;
		this.isNew = isNew;
		this.sale = sale;
		this.star = star;
		this.description = description;
		this.category = category;
	}
}
