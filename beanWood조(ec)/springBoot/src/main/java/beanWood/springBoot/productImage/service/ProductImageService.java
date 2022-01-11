package beanWood.springBoot.productImage.service;

import beanWood.springBoot.productImage.dto.IProductImage;
import beanWood.springBoot.productImage.dto.OProductImage;
import beanWood.springBoot.productImage.model.ProductImage;

import java.util.List;

public interface ProductImageService {
	ProductImage saveProductImage(IProductImage iProductImage);

	OProductImage findByIdProductImage(Long id);

	List<OProductImage> findAllProductImage();

	void deleteByIdProductImage(Long id);

	List<OProductImage> findByProductId(Long productId);

	void deleteAllByProductId(Long productId);
}
