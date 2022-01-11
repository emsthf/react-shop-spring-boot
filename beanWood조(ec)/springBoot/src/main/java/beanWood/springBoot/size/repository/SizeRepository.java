package beanWood.springBoot.size.repository;

import beanWood.springBoot.size.model.Size;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SizeRepository extends JpaRepository<Size, Long> {
}
