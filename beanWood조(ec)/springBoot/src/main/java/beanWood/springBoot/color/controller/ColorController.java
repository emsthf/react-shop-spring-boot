package beanWood.springBoot.color.controller;

import beanWood.springBoot.color.model.Color;

import java.util.List;
import java.util.Optional;

public interface ColorController {
	int saveColor(Color color);

	int updateColor(Color color);

	Optional<Color> findByIdColor(Long id);

	List<Color> findAllColor();

	int deleteByIdColor(Long id);
}
