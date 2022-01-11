package beanWood.springBoot.cartList.model;

import beanWood.springBoot.product.model.Product;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
public class CartList {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@ManyToOne
	@JoinColumn(name = "product_id")
	private Product product;
	private int quantity;

	@Builder
	public CartList(Long id, Product product, int quantity) {
		this.id = id;
		this.product = product;
		this.quantity = quantity;
	}
}
