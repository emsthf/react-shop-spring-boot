package beanWood.springBoot.image.controller;

import beanWood.springBoot.image.model.Image;

import java.util.List;
import java.util.Optional;

public interface ImageController {
    int saveImage(Image image);

    int updateImage(Image image);

    Optional<Image> findByIdImage(Long id);

    List<Image> findAllImage();

    int deleteByIdImage(Long id);
}
