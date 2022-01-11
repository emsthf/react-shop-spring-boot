package beanWood.springBoot.bannerCard.service;

import beanWood.springBoot.bannerCard.dto.IBannerCard;
import beanWood.springBoot.bannerCard.model.BannerCard;

import java.util.List;
import java.util.Optional;


public interface BannerCardService {
     BannerCard saveBannerCard(IBannerCard iBannerCard);

     Optional<BannerCard> findByIdBannerCard(Long id);

     List<BannerCard> findBannerCard();

     void deleteByIdBannerCard(Long id);
}
