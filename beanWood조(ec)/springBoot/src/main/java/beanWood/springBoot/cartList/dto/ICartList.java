package beanWood.springBoot.cartList.dto;

import lombok.Data;

@Data
public class ICartList {
	private Long id;
	private Long productId;
	private int quantity;
}
