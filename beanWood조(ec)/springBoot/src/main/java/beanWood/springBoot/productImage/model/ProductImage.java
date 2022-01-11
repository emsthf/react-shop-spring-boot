package beanWood.springBoot.productImage.model;

import beanWood.springBoot.image.model.Image;
import beanWood.springBoot.product.model.Product;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
public class ProductImage {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@ManyToOne
	@JoinColumn(name = "image_id")
	private Image image;
	@ManyToOne
	@JoinColumn(name = "product_id")
	private Product product;

	@Builder
	public ProductImage(Long id, Image image, Product product) {
		this.id = id;
		this.image = image;
		this.product = product;
	}
}
