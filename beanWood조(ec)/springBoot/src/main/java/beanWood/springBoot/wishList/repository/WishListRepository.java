package beanWood.springBoot.wishList.repository;

import beanWood.springBoot.wishList.model.WishList;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WishListRepository extends JpaRepository<WishList, Long> {
	WishList findByProductId(Long productId);
}
