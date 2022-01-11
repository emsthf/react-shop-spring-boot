package beanWood.springBoot.brand.model;

import beanWood.springBoot.image.model.Image;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
public class Brand {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String brandName;
	@ManyToOne
	@JoinColumn(name = "image_id")
	private Image image;

	@Builder
	public Brand(Long id, String brandName, Image image) {
		this.id = id;
		this.brandName = brandName;
		this.image = image;
	}
}
