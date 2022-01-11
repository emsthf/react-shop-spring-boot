package beanWood.springBoot.productColor.dto;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class IProductColor {
	private Long id;
	private Long productId;
	private Long colorId;

	@Builder
	public IProductColor(Long id, Long productId, Long colorId) {
		this.id = id;
		this.productId = productId;
		this.colorId = colorId;
	}
}
