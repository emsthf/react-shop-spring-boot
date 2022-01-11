package beanWood.springBoot.brand.service;

import beanWood.springBoot.brand.dto.IBrand;
import beanWood.springBoot.brand.model.Brand;

import java.util.List;
import java.util.Optional;

public interface BrandService {
	Brand saveBrand(IBrand iBrand);

	List<Brand> findAllBrand();

	Optional<Brand> findByIdBrand(Long id);

	void deleteByIdBrand(Long id);
}
