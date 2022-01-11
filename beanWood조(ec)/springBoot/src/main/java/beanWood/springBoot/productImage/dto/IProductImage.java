package beanWood.springBoot.productImage.dto;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class IProductImage {
	private Long id;
	private Long imageId;
	private Long productId;

	@Builder
	public IProductImage(Long id, Long imageId, Long productId) {
		this.id = id;
		this.imageId = imageId;
		this.productId = productId;
	}
}
