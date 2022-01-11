package beanWood.springBoot.bannerCard.repository;

import beanWood.springBoot.bannerCard.model.BannerCard;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BannerCardRepository extends JpaRepository<BannerCard, Long> {
}
