package beanWood.springBoot.product.service;

import beanWood.springBoot.product.dto.IProduct;
import beanWood.springBoot.product.model.Product;

import java.util.List;
import java.util.Optional;

public interface ProductService {
	Product saveProduct(IProduct iProduct);

	Optional<Product> findByIdProduct(Long id);

	List<Product> findAllProduct();

	void deleteByIdProduct(Long id);

	List<Product> findByCategoryId(Long categoryId);

	Product updateProduct(IProduct iProduct);
}
