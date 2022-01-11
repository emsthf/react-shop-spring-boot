package beanWood.springBoot.size.service;

import beanWood.springBoot.size.model.Size;

import java.util.List;
import java.util.Optional;

public interface SizeService {
	Size saveSize(Size size);

	Optional<Size> findByIdSize(Long id);

	List<Size> findAllSize();

	int deleteByIdSize(Long id);
}
