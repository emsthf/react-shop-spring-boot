package beanWood.springBoot.productColor.service;

import beanWood.springBoot.productColor.dto.IProductColor;
import beanWood.springBoot.productColor.dto.OProductColor;
import beanWood.springBoot.productColor.model.ProductColor;

import java.util.List;

public interface ProductColorService {
	ProductColor saveProductColor(IProductColor iProductColor);

	List<OProductColor> findAllProductColor();

	OProductColor findByIdProductColor(Long id);

	void deleteByIdProductColor(Long id);

	List<OProductColor> findByProductId(Long productId);

	void deleteAllByProductId(Long productId);
}
