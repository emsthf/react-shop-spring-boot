package beanWood.springBoot.productColor.repository;

import beanWood.springBoot.productColor.model.ProductColor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductColorRepository extends JpaRepository<ProductColor, Long> {
	List<ProductColor> findByProductId(Long productId);
}
