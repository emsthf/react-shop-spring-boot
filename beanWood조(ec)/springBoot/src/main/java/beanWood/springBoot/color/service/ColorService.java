package beanWood.springBoot.color.service;

import beanWood.springBoot.color.model.Color;

import java.util.List;
import java.util.Optional;

public interface ColorService {
	Color saveColor(Color color);

	Optional<Color> findByIdColor(Long id);

	List<Color> findAllColor();

	int deleteByIdColor(Long id);
}
