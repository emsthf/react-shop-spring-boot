package beanWood.springBoot.cartList.controller;

import beanWood.springBoot.cartList.dto.ICartList;
import beanWood.springBoot.cartList.model.CartList;
import beanWood.springBoot.cartList.service.CartListService;
import beanWood.springBoot.product.service.ProductService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/cartList")
@RequiredArgsConstructor
@Slf4j
public class CartListControllerImpl implements CartListController {
	private final CartListService cartListService;
	private final ProductService productService;

	@Override
	@PostMapping("/save")
	public int saveCartList(@RequestBody ICartList iCartList) {
		try {
			if(cartListService.saveCartList(iCartList) == null) return 2;
			return 1;
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return 2;
		}
	}

	@Override
	@PutMapping("/update")
	public int updateCartList(@RequestBody ICartList iCartList) {
		try {
			if(cartListService.saveCartList(iCartList) == null) return 2;
			return 1;
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return 2;
		}
	}

	@Override
	@GetMapping("/find/{id}")
	public Optional<CartList> findByIdCartList(@PathVariable Long id) {
		try {
			return cartListService.findByIdCartList(id);
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return Optional.empty();
		}
	}

	@Override
	@GetMapping("/findAll")
	public List<CartList> findAllCartList() {
		try {
			return cartListService.findAllCartList();
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return null;
		}
	}

	@Override
	@DeleteMapping("/delete/{id}")
	public int deleteByIdCartList(@PathVariable Long id) {
		try {
			cartListService.deleteByIdCartList(id);
			return 1;
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return 2;
		}
	}
}
