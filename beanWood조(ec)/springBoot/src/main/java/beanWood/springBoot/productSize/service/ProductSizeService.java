package beanWood.springBoot.productSize.service;

import beanWood.springBoot.productSize.dto.IProductSize;
import beanWood.springBoot.productSize.dto.OProductSize;
import beanWood.springBoot.productSize.model.ProductSize;

import java.util.List;

public interface ProductSizeService {
	ProductSize saveProductSize(IProductSize iProductSize);

	List<OProductSize> findAllProductSize();

	OProductSize findByIdProductSize(Long id);

	void deleteByIdProductSize(Long id);

	List<OProductSize> findByProductId(Long productId);

	void deleteAllByProductId(Long productId);
}
