package beanWood.springBoot.wishList.service;

import beanWood.springBoot.product.repository.ProductRepository;
import beanWood.springBoot.wishList.dto.IWishList;
import beanWood.springBoot.wishList.model.WishList;
import beanWood.springBoot.wishList.repository.WishListRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class WishListServiceImpl implements WishListService {
	private final WishListRepository wishListRepository;
	private final ProductRepository productRepository;

	@Override
	public WishList saveWishList(IWishList iWishList) {
		log.info("save WishList: {}", iWishList);
		if (wishListRepository.findByProductId(iWishList.getProductId()) == null) {
			log.info("not found start add item to wishList");
			try {
				return wishListRepository.save(
						WishList.builder()
								.id(iWishList.getId())
								.product(productRepository.findById(iWishList.getProductId()).get())
								.build()
				);
			} catch (Exception e) {
				log.error("Error: {}", e.getMessage());
				return null;
			}
		} else {
			log.info("already exist item: {}", iWishList);
			return null;
		}
	}

	@Override
	public Optional<WishList> findByIdWishList(Long id) {
		log.info("find by id WishList: {}", id);
		try {
			return wishListRepository.findById(id);
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return Optional.empty();
		}
	}

	@Override
	public List<WishList> findAllWishList() {
		log.info("find all WishList");
		try {
			return wishListRepository.findAll();
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return null;
		}
	}

	@Override
	public void deleteByIdWishList(Long id) {
		log.info("delete by id WishList: {}", id);
		try {
			wishListRepository.deleteById(id);
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
		}
	}
}
