package beanWood.springBoot.size.controller;

import beanWood.springBoot.size.model.Size;

import java.util.List;
import java.util.Optional;

public interface SizeController {
	int saveSize(Size size);

	int updateSize(Size size);

	Optional<Size> findByIdSize(Long id);

	List<Size> findAllSize();

	int deleteByIdSize(Long id);
}
