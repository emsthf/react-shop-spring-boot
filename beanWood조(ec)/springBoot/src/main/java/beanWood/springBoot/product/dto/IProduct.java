package beanWood.springBoot.product.dto;

import lombok.Data;

import java.util.List;

@Data
public class IProduct {
	private Long id;
	private String productName;
	private int price;
	private boolean isNew;
	private int sale;
	private int star;
	private String description;
	private Long categoryId;
	private List<String> images;
	private List<Long> imageIds;
	private List<Long> colorIds;
	private List<Long> sizeIds;
}
