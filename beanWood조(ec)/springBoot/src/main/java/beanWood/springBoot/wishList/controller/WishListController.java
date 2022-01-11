package beanWood.springBoot.wishList.controller;

import beanWood.springBoot.wishList.dto.IWishList;
import beanWood.springBoot.wishList.model.WishList;

import java.util.List;
import java.util.Optional;

public interface WishListController {
	int saveWishList(IWishList IWishList);

	int updateWishList(IWishList iWishList);

	Optional<WishList> findByIdWishList(Long id);

	List<WishList> findAllWishList();

	int deleteByIdWishList(Long id);
}
