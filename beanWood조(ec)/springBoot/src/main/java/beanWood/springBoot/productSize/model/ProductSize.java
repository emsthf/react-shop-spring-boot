package beanWood.springBoot.productSize.model;

import beanWood.springBoot.product.model.Product;
import beanWood.springBoot.size.model.Size;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
public class ProductSize {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@ManyToOne
	@JoinColumn(name = "product_id")
	private Product product;
	@ManyToOne
	@JoinColumn(name = "size_id")
	private Size size;

	@Builder
	public ProductSize(Long id, Product product, Size size) {
		this.id = id;
		this.product = product;
		this.size = size;
	}
}
