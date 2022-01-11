package beanWood.springBoot.product.controller;

import beanWood.springBoot.product.dto.IProduct;
import beanWood.springBoot.product.model.Product;
import beanWood.springBoot.product.service.ProductService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Slf4j
@RestController
@CrossOrigin
@RequestMapping("/product")
@RequiredArgsConstructor
public class ProductControllerImpl implements ProductController {
	private final ProductService productService;

	@Override
	@PostMapping("/save")
	public int saveProduct(@RequestBody IProduct iProduct) {
		try {
			if(productService.saveProduct(iProduct) == null) return 2;
			return 1;
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return 2;
		}

	}

	@Override
	@PutMapping("/update")
	public int updateProduct(@RequestBody IProduct iProduct) {
		try {
			if(productService.updateProduct(iProduct) == null) return 2;
			return 1;
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return 2;
		}
	}

	@Override
	@GetMapping("/find/{id}")
	public Optional<Product> findByIdProduct(@PathVariable Long id) {
		try {
			return productService.findByIdProduct(id);
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return Optional.empty();
		}
	}

	@Override
	@GetMapping("/findAll")
	public List<Product> findAllProduct() {
		try {
			return productService.findAllProduct();
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return null;
		}
	}

	@Override
	@DeleteMapping("/delete/{id}")
	public int deleteByIdProduct(@PathVariable Long id) {
		try {
			productService.deleteByIdProduct(id);
			return 1;
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return 2;
		}
	}

	@Override
	@GetMapping("/findByCategoryId/{categoryId}")
	public List<Product> findByCategoryId(@PathVariable Long categoryId) {
		try {
			return productService.findByCategoryId(categoryId);
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return null;
		}
	}
}
