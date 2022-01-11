package beanWood.springBoot.purchase.dto;

import beanWood.springBoot.cartList.model.CartList;
import lombok.Data;

import java.util.List;

@Data
public class PurchaseDto {
	private Long id;
	private Long userId;
	private List<CartList> cartLists;
}
