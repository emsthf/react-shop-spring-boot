package beanWood.springBoot.productColor.controller;

import beanWood.springBoot.productColor.dto.IProductColor;
import beanWood.springBoot.productColor.dto.OProductColor;
import beanWood.springBoot.productColor.service.ProductColorService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/productColor")
@CrossOrigin
@Slf4j
public class ProductColorControllerImpl implements ProductColorController {
	private final ProductColorService productColorService;

	@Override
	@PostMapping("/save")
	public int saveProductColor(@RequestBody IProductColor iProductColor) {
		try {
			if(productColorService.saveProductColor(iProductColor) == null) return 2;
			return 1;
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return 2;
		}
	}

	@Override
	@PutMapping("/update")
	public int updateProductColor(@RequestBody IProductColor iProductColor) {
		try {
			if(productColorService.saveProductColor(iProductColor) == null) return 2;
			return 1;
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return 2;
		}
	}

	@Override
	@GetMapping("/findAll")
	public List<OProductColor> findAllProductColor() {
		try {
			return productColorService.findAllProductColor();
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return null;
		}
	}

	@Override
	@GetMapping("/find/{id}")
	public OProductColor findByIdProductColor(@PathVariable Long id) {
		try {
			return productColorService.findByIdProductColor(id);
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return null;
		}
	}

	@Override
	@DeleteMapping("/delete/{id}")
	public int deleteByIdProductColor(@PathVariable Long id) {
		try {
			productColorService.deleteByIdProductColor(id);
			return 1;
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return 2;
		}

	}

	@Override
	@GetMapping("/findByProductId/{productId}")
	public List<OProductColor> findByProductId(@PathVariable Long productId) {
		try {
			return productColorService.findByProductId(productId);
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return null;
		}
	}

	@Override
	@DeleteMapping("/deleteByProductId/{productId}")
	public int deleteAllByProductId(@PathVariable Long productId) {
		try {
			productColorService.deleteAllByProductId(productId);
			return 1;
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return 2;
		}
	}
}
