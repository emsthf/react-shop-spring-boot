package beanWood.springBoot.bannerCard.service;

import beanWood.springBoot.bannerCard.dto.IBannerCard;
import beanWood.springBoot.bannerCard.model.BannerCard;
import beanWood.springBoot.bannerCard.repository.BannerCardRepository;
import beanWood.springBoot.image.repository.ImageRepository;
import beanWood.springBoot.productImage.model.ProductImage;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class BannerCardServiceImpl implements BannerCardService {
	private final BannerCardRepository bannerCardRepository;
	private final ImageRepository imageRepository;

	@Override
	public BannerCard saveBannerCard(IBannerCard iBannerCard) {
		log.info("save BannerCard: {}", iBannerCard.getTitle());
		try {
			return bannerCardRepository.save(
					BannerCard.builder()
							.image(imageRepository.findById(iBannerCard.getImageId()).get())
							.text(iBannerCard.getText())
							.id(iBannerCard.getId())
							.tag(iBannerCard.getTag())
							.title(iBannerCard.getTitle())
							.build()
			);
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return null;
		}
	}

	@Override
	public Optional<BannerCard> findByIdBannerCard(Long id) {
		log.info("find by id BannerCard: {}", id);
		try {
			return bannerCardRepository.findById(id);
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return Optional.empty();
		}
	}

	@Override
	public List<BannerCard> findBannerCard() {
		log.info("find all BannerCard");
		try {
			return bannerCardRepository.findAll();
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return null;
		}
	}

	@Override
	public void deleteByIdBannerCard(Long id) {
		log.info("delete by id BannerCard: {}", id);
		try {
			bannerCardRepository.deleteById(id);
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
		}
	}
}
