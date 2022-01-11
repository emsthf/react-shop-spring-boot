package beanWood.springBoot.productColor.controller;

import beanWood.springBoot.productColor.dto.IProductColor;
import beanWood.springBoot.productColor.dto.OProductColor;

import java.util.List;

public interface ProductColorController {
	int saveProductColor(IProductColor iProductColor);

	int updateProductColor(IProductColor iProductColor);

	List<OProductColor> findAllProductColor();

	OProductColor findByIdProductColor(Long id);

	int deleteByIdProductColor(Long id);

	List<OProductColor> findByProductId(Long productId);

	int deleteAllByProductId(Long productId);
}
