package beanWood.springBoot.productImage.controller;

import beanWood.springBoot.productImage.dto.IProductImage;
import beanWood.springBoot.productImage.dto.OProductImage;
import beanWood.springBoot.productImage.service.ProductImageService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/productImage")
@RequiredArgsConstructor
@Slf4j
public class ProductImageControllerImpl implements ProductImageController {
	private final ProductImageService productImageService;


	@Override
	@PostMapping("/save")
	public int saveProductImage(@RequestBody IProductImage iProductImage) {
		try {
			if (productImageService.saveProductImage(iProductImage) == null) return 2;
			return 1;
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return 2;
		}
	}

	@Override
	@PutMapping("/update")
	public int updateProductImage(@RequestBody IProductImage iProductImage) {
		try {
			if(productImageService.saveProductImage(iProductImage) == null) return 2;
			return 1;
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return 2;
		}
	}

	@Override
	@GetMapping("/find/{id}")
	public OProductImage findByIdProductImage(@PathVariable Long id) {
		try {
			return productImageService.findByIdProductImage(id);
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return null;
		}
	}

	@Override
	@GetMapping("/findAll")
	public List<OProductImage> findAllProductImage() {
		try {
			return productImageService.findAllProductImage();
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return null;
		}
	}

	@Override
	@DeleteMapping("/delete/{id}")
	public int deleteByIdProductImage(@PathVariable Long id) {
		try {
			productImageService.deleteByIdProductImage(id);
			return 1;
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return 2;
		}
	}

	@Override
	@GetMapping("/findByProductId/{productId}")
	public List<OProductImage> findByProductId(@PathVariable Long productId) {
		try {
			return productImageService.findByProductId(productId);
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return null;
		}
	}

	@Override
	@DeleteMapping("/deleteByProductId/{productId}")
	public int deleteAllByProductId(@PathVariable Long productId) {
		try {
			productImageService.deleteAllByProductId(productId);
			return 1;
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return 2;
		}
	}
}
