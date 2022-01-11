package beanWood.springBoot.category.repository;

import beanWood.springBoot.category.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
