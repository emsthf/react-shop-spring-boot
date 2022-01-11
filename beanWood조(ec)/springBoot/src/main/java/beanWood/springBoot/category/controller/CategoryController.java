package beanWood.springBoot.category.controller;

import beanWood.springBoot.category.dto.ICategory;
import beanWood.springBoot.category.model.Category;

import java.util.List;
import java.util.Optional;

public interface CategoryController {
	int saveCategory(ICategory iCategory);

	int updateCategory(ICategory iCategory);

	Optional<Category> findByIdCategory(Long id);

	List<Category> findAllCategory();

	int deleteByIdCategory(Long id);
}
