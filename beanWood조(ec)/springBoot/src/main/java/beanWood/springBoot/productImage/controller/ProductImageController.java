package beanWood.springBoot.productImage.controller;

import beanWood.springBoot.productImage.dto.IProductImage;
import beanWood.springBoot.productImage.dto.OProductImage;

import java.util.List;

public interface ProductImageController {
	int saveProductImage(IProductImage iproductImage);

	int updateProductImage(IProductImage iProductImage);

	OProductImage findByIdProductImage(Long id);

	List<OProductImage> findAllProductImage();

	int deleteByIdProductImage(Long id);

	List<OProductImage> findByProductId(Long productId);

	int deleteAllByProductId(Long productId);
}
