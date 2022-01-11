package beanWood.springBoot.product.controller;

import beanWood.springBoot.product.dto.IProduct;
import beanWood.springBoot.product.model.Product;

import java.util.List;
import java.util.Optional;

public interface ProductController {
	int saveProduct(IProduct iProduct);

	int updateProduct(IProduct iProduct);

	Optional<Product> findByIdProduct(Long id);

	List<Product> findAllProduct();

	int deleteByIdProduct(Long id);

	List<Product> findByCategoryId(Long categoryId);
}
