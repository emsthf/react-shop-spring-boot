package beanWood.springBoot.wishList.controller;

import beanWood.springBoot.wishList.dto.IWishList;
import beanWood.springBoot.wishList.model.WishList;
import beanWood.springBoot.wishList.service.WishListService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/wishList")
@RequiredArgsConstructor
@Slf4j
public class WishListControllerImpl implements WishListController {
	private final WishListService wishListService;

	@Override
	@PostMapping("/save")
	public int saveWishList(@RequestBody IWishList iWishList) {
		try {
			if(wishListService.saveWishList(iWishList) == null) return 2;
			return 1;
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return 2;
		}
	}

	@Override
	@PutMapping("/update")
	public int updateWishList(@RequestBody IWishList iWishList) {
		try {
			if(wishListService.saveWishList(iWishList) == null) return 2;
			return 1;
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return 2;
		}
	}

	@Override
	@GetMapping("/find/{id}")
	public Optional<WishList> findByIdWishList(@PathVariable Long id) {
		try {
			return wishListService.findByIdWishList(id);
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return Optional.empty();
		}
	}

	@Override
	@GetMapping("/findAll")
	public List<WishList> findAllWishList() {
		try {
			return wishListService.findAllWishList();
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return null;
		}
	}

	@Override
	@DeleteMapping("/delete/{id}")
	public int deleteByIdWishList(@PathVariable Long id) {
		try {
			wishListService.deleteByIdWishList(id);
			return 1;
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return 2;
		}
	}
}
