package beanWood.springBoot.category.controller;

import beanWood.springBoot.category.dto.ICategory;
import beanWood.springBoot.category.model.Category;
import beanWood.springBoot.category.service.CategoryService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/category")
@RequiredArgsConstructor
@Slf4j
public class CategoryControllerImpl implements CategoryController {
	private final CategoryService categoryService;

	@Override
	@PostMapping("/save")
	public int saveCategory(@RequestBody ICategory iCategory) {
		try {
			if(categoryService.saveCategory(iCategory) == null) return 2;
			return 1;
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return 2;
		}
	}

	@Override
	@PutMapping("/update")
	public int updateCategory(@RequestBody ICategory iCategory) {
		try {
			if(categoryService.saveCategory(iCategory) == null) return 2;
			return 1;
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return 2;
		}
	}

	@Override
	@GetMapping("/find/{id}")
	public Optional<Category> findByIdCategory(@PathVariable Long id) {
		try {
			return categoryService.findByIdCategory(id);
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return Optional.empty();
		}
	}

	@Override
	@GetMapping("/findAll")
	public List<Category> findAllCategory() {
		try {
			return categoryService.findAllCategory();
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return null;
		}
	}

	@Override
	@DeleteMapping("/delete/{id}")
	public int deleteByIdCategory(@PathVariable Long id) {
		try {
			categoryService.deleteByIdCategory(id);
			return 1;
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return 2;
		}
	}
}
