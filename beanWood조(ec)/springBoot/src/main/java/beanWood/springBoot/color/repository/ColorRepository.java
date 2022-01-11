package beanWood.springBoot.color.repository;

import beanWood.springBoot.color.model.Color;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ColorRepository extends JpaRepository<Color, Long>{
}
