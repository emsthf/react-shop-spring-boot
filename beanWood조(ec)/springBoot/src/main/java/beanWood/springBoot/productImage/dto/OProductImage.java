package beanWood.springBoot.productImage.dto;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class OProductImage {
	private String imageUrl;

	@Builder
	public OProductImage(String imageUrl) {
		this.imageUrl = imageUrl;
	}
}
