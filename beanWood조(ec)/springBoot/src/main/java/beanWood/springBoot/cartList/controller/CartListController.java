package beanWood.springBoot.cartList.controller;

import beanWood.springBoot.cartList.dto.ICartList;
import beanWood.springBoot.cartList.model.CartList;

import java.util.List;
import java.util.Optional;

public interface CartListController {
	int saveCartList(ICartList iCartList);

	int updateCartList(ICartList iCartList);

	Optional<CartList> findByIdCartList(Long id);

	List<CartList> findAllCartList();

	int deleteByIdCartList(Long id);
}
