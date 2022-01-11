package beanWood.springBoot.wishList.model;

import beanWood.springBoot.product.model.Product;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
public class WishList {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@ManyToOne
	@JoinColumn(name = "product_id")
	private Product product;

	@Builder
	public WishList(Long id, Product product) {
		this.id = id;
		this.product = product;
	}
}
