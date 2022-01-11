package beanWood.springBoot.category.service;

import beanWood.springBoot.category.dto.ICategory;
import beanWood.springBoot.category.model.Category;

import java.util.List;
import java.util.Optional;

public interface CategoryService {
	Category saveCategory(ICategory iCategory);

	Optional<Category> findByIdCategory(Long id);

	List<Category> findAllCategory();

	void deleteByIdCategory(Long id);
}
