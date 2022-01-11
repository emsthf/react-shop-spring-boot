package beanWood.springBoot.brand.controller;

import beanWood.springBoot.brand.dto.IBrand;
import beanWood.springBoot.brand.model.Brand;

import java.util.List;
import java.util.Optional;

public interface BrandController {

    int saveBrand(IBrand iBrand);

    int updateBrand(IBrand iBrand);

    Optional<Brand> findByIdBrand(Long id);

    List<Brand> findAllBrand();

    int deleteByIdProduct(Long id);
}
