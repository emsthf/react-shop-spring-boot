package beanWood.springBoot.image.repository;

import beanWood.springBoot.image.model.Image;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository extends JpaRepository<Image, Long> {
}
