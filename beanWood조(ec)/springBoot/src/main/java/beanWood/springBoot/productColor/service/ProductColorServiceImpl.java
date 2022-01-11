package beanWood.springBoot.productColor.service;

import beanWood.springBoot.color.repository.ColorRepository;
import beanWood.springBoot.product.repository.ProductRepository;
import beanWood.springBoot.productColor.dto.IProductColor;
import beanWood.springBoot.productColor.dto.OProductColor;
import beanWood.springBoot.productColor.model.ProductColor;
import beanWood.springBoot.productColor.repository.ProductColorRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class ProductColorServiceImpl implements ProductColorService {
	private final ProductColorRepository productColorRepository;
	private final ProductRepository productRepository;
	private final ColorRepository colorRepository;

	@Override
	public ProductColor saveProductColor(IProductColor iProductColor) {
		log.info("save productColor by : {}", iProductColor);
		try {
			return productColorRepository.save(
					ProductColor.builder()
							.id(iProductColor.getId())
							.color(colorRepository.findById(iProductColor.getColorId()).get())
							.product(productRepository.findById(iProductColor.getProductId()).get())
							.build()

			);
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return null;
		}
	}

	@Override
	public List<OProductColor> findAllProductColor() {
		log.info("find all productColor");
		List<OProductColor> oProductColors = new ArrayList<>();
		try {
			productColorRepository.findAll().forEach(productColor -> {
				oProductColors.add(OProductColor.builder()
						.colorId(productColor.getColor().getId())
						.build());
			});
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
		}
		return oProductColors;
	}

	@Override
	public OProductColor findByIdProductColor(Long id) {
		log.info("find by id productColor : {}", id);
		OProductColor oProductColor = new OProductColor();
		try {
			ProductColor productColor = productColorRepository.findById(id).get();
			oProductColor = OProductColor.builder()
					.colorId(productColor.getColor().getId())
					.build();
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
		}
		return oProductColor;
	}

	@Override
	public void deleteByIdProductColor(Long id) {
		log.info("delete by id productColor : {}", id);
		try {
			productColorRepository.deleteById(id);
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
		}

	}

	@Override
	public List<OProductColor> findByProductId(Long productId) {
		log.info("find by productId productColor : {}", productId);
		List<OProductColor> oProductColors = new ArrayList<>();
		try {
			productColorRepository.findByProductId(productId).forEach(productColor -> {
				oProductColors.add(OProductColor.builder()
						.colorId(productColor.getColor().getId())
						.build());
			});
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
		}
		return oProductColors;
	}

	@Override
	public void deleteAllByProductId(Long productId) {
		log.info("delete by productId productColor : {}", productId);
		try {
			productColorRepository.deleteAll(productColorRepository.findByProductId(productId));
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
		}
	}
}
