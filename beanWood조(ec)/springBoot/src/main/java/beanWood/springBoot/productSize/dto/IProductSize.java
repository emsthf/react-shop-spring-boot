package beanWood.springBoot.productSize.dto;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class IProductSize {
	private Long id;
	private Long productId;
	private Long sizeId;

	@Builder
	public IProductSize(Long id, Long productId, Long sizeId) {
		this.id = id;
		this.productId = productId;
		this.sizeId = sizeId;
	}
}
