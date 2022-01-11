package beanWood.springBoot.brand.controller;

import beanWood.springBoot.brand.dto.IBrand;
import beanWood.springBoot.brand.model.Brand;
import beanWood.springBoot.brand.service.BrandService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/brand")
@RequiredArgsConstructor
@Slf4j
public class BrandControllerImpl implements BrandController {
	private final BrandService brandService;

	@Override
	@PostMapping("/save")
	public int saveBrand(@RequestBody IBrand iBrand) {
		try {
			if(brandService.saveBrand(iBrand) == null) return 2;
			return 1;
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return 2;
		}
	}

	@Override
	@PutMapping("/update")
	public int updateBrand(@RequestBody IBrand iBrand) {
		try {
			if(brandService.saveBrand(iBrand) == null) return 2;
			return 1;
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return 2;
		}
	}

	@Override
	@GetMapping("/find/{id}")
	public Optional<Brand> findByIdBrand(@PathVariable Long id) {
		try {
			return brandService.findByIdBrand(id);
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return Optional.empty();
		}
	}

	@Override
	@GetMapping("/findAll")
	public List<Brand> findAllBrand() {
		try {
			return brandService.findAllBrand();
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return null;
		}
	}

	@Override
	@DeleteMapping("/delete/{id}")
	public int deleteByIdProduct(@PathVariable Long id) {
		try {
			brandService.deleteByIdBrand(id);
			return 1;
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return 2;
		}
	}
}
