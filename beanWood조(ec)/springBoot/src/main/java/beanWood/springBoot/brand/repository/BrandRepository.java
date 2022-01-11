package beanWood.springBoot.brand.repository;

import beanWood.springBoot.brand.model.Brand;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BrandRepository extends JpaRepository<Brand, Long> {
}
