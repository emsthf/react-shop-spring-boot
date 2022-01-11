package beanWood.springBoot.bannerCard.dto;

import lombok.Data;

@Data
public class IBannerCard {
	private Long id;
	private Long imageId;
	private String tag;
	private String title;
	private String text;
}
