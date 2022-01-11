package beanWood.springBoot.sliderList.service;

import beanWood.springBoot.image.repository.ImageRepository;
import beanWood.springBoot.product.repository.ProductRepository;
import beanWood.springBoot.sliderList.dto.ISliderList;
import beanWood.springBoot.sliderList.model.SliderList;
import beanWood.springBoot.sliderList.repository.SliderListRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class SliderListServiceImpl implements SliderListService {
	private final SliderListRepository sliderListRepository;
	private final ProductRepository productRepository;
	private final ImageRepository imageRepository;

	@Override
	public SliderList saveSliderList(ISliderList iSliderList) {
		log.info("save SliderList: {}", iSliderList.getEventName());
		try {
			return sliderListRepository.save(
				SliderList.builder()
						.id(iSliderList.getId())
						.eventName(iSliderList.getEventName())
						.product(productRepository.findById(iSliderList.getProductId()).get())
						.image(imageRepository.findById(iSliderList.getImageId()).get())
						.build()
		);
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return null;
		}
	}

	@Override
	public Optional<SliderList> findByIdSliderList(Long id) {
		log.info("find by id SliderList: {}", id);
		try {
			return sliderListRepository.findById(id);
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return Optional.empty();
		}
	}

	@Override
	public List<SliderList> findAllSliderList() {
		log.info("find all SliderList");
		try {
			return sliderListRepository.findAll();
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return null;
		}
	}

	@Override
	public void deleteByIdSliderList(Long id) {
		log.info("delete by id SliderList: {}", id);
		try {
			sliderListRepository.deleteById(id);
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
		}
	}
}
