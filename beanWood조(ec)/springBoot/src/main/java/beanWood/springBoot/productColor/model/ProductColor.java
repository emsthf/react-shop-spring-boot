package beanWood.springBoot.productColor.model;

import beanWood.springBoot.color.model.Color;
import beanWood.springBoot.product.model.Product;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
public class ProductColor {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@ManyToOne
	@JoinColumn(name = "product_id")
	private Product product;
	@ManyToOne
	@JoinColumn(name = "color_id")
	private Color color;

	@Builder
	public ProductColor(Long id, Product product, Color color) {
		this.id = id;
		this.product = product;
		this.color = color;
	}
}
