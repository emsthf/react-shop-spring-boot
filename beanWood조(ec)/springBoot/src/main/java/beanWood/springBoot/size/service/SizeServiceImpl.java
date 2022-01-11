package beanWood.springBoot.size.service;

import beanWood.springBoot.size.model.Size;
import beanWood.springBoot.size.repository.SizeRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class SizeServiceImpl implements SizeService {
	private final SizeRepository sizeRepository;

	@Override
	public Size saveSize(Size size) {
		log.info("save Size: {}", size.getSizeName());
		try {
			return sizeRepository.save(size);
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return null;
		}
	}

	@Override
	public Optional<Size> findByIdSize(Long id) {
		log.info("find by id Size: {}", id);
		try {
			return sizeRepository.findById(id);
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return Optional.empty();
		}
	}

	@Override
	public List<Size> findAllSize() {
		log.info("find all Size");
		try {
			return sizeRepository.findAll();
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return null;
		}
	}

	@Override
	public int deleteByIdSize(Long id) {
		log.info("delete by id Size");
		try {
			sizeRepository.deleteById(id);
			return 1;
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return 2;
		}
	}
}
