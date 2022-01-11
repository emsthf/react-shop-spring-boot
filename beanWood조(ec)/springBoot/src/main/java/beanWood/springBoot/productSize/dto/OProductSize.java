package beanWood.springBoot.productSize.dto;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class OProductSize {
	private Long sizeId;

	@Builder
	public OProductSize(Long sizeId) {
		this.sizeId = sizeId;
	}
}
