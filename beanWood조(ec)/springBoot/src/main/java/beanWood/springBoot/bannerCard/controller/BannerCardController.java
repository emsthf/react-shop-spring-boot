package beanWood.springBoot.bannerCard.controller;

import beanWood.springBoot.bannerCard.dto.IBannerCard;
import beanWood.springBoot.bannerCard.model.BannerCard;

import java.util.List;
import java.util.Optional;

public interface BannerCardController {
    int saveBannerCard(IBannerCard iBannerCard);

    int updateBannerCard(IBannerCard iBannerCard);

    Optional<BannerCard> findByBannerCard(Long id);

    List<BannerCard> findAllBannerCard();

    int deleteByIdBannerCard(Long id);
}
