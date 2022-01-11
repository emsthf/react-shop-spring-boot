package beanWood.springBoot.productColor.dto;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class OProductColor {
	private Long colorId;

	@Builder
	public OProductColor(Long colorId) {
		this.colorId = colorId;
	}
}
