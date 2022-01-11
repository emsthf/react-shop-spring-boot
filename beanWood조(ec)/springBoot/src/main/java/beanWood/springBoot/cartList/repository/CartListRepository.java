package beanWood.springBoot.cartList.repository;

import beanWood.springBoot.cartList.model.CartList;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartListRepository extends JpaRepository<CartList, Long> {
	CartList findByProductId(Long productId);
}
