package beanWood.springBoot.brand.service;

import beanWood.springBoot.brand.dto.IBrand;
import beanWood.springBoot.brand.model.Brand;
import beanWood.springBoot.brand.repository.BrandRepository;
import beanWood.springBoot.image.repository.ImageRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class BrandServiceImpl implements BrandService {
	private final BrandRepository brandRepository;
	private final ImageRepository imageRepository;

	@Override
	public Brand saveBrand(IBrand iBrand) {
		log.info("save Brand: {}", iBrand.getBrandName());
		try {
			return brandRepository.save(
					Brand.builder()
							.id(iBrand.getId())
							.brandName(iBrand.getBrandName())
							.image(imageRepository.findById(iBrand.getImageId()).get())
							.build()
			);
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return null;
		}
	}

	@Override
	public List<Brand> findAllBrand() {
		log.info("find all Brand");
		try {
			return brandRepository.findAll();
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return null;
		}
	}

	@Override
	public Optional<Brand> findByIdBrand(Long id) {
		log.info("find Brand by Id: {}", id);
		try {
			return brandRepository.findById(id);
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return Optional.empty();
		}
	}

	@Override
	public void deleteByIdBrand(Long id) {
		log.info("delete Brand by Id: {}", id);
		try {
			brandRepository.deleteById(id);
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
		}
	}
}
