package beanWood.springBoot.color.service;

import beanWood.springBoot.color.model.Color;
import beanWood.springBoot.color.repository.ColorRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class ColorServiceImpl implements ColorService {
	private final ColorRepository colorRepository;

	@Override
	public Color saveColor(Color color) {
		log.info("save Color successfully: {}", color);
		try {
			return colorRepository.save(color);
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return null;
		}
	}

	@Override
	public Optional<Color> findByIdColor(Long id) {
		log.info("find by id Color: {}", id);
		try {
			return colorRepository.findById(id);
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return Optional.empty();
		}
	}

	@Override
	public List<Color> findAllColor() {
		log.info("find all Color");
		try {
			return colorRepository.findAll();
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return null;
		}
	}

	@Override
	public int deleteByIdColor(Long id) {
		log.info("delete by id Color: {}", id);
		try {
			colorRepository.deleteById(id);
			return 1;
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return 2;
		}
	}
}
