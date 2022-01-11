package beanWood.springBoot.productSize.service;

import beanWood.springBoot.product.repository.ProductRepository;
import beanWood.springBoot.productSize.dto.IProductSize;
import beanWood.springBoot.productSize.dto.OProductSize;
import beanWood.springBoot.productSize.model.ProductSize;
import beanWood.springBoot.productSize.repository.ProductSizeRepository;
import beanWood.springBoot.size.repository.SizeRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class ProductSizeServiceImpl implements ProductSizeService {
	private final ProductSizeRepository productSizeRepository;
	private final ProductRepository productRepository;
	private final SizeRepository sizeRepository;

	@Override
	public ProductSize saveProductSize(IProductSize iProductSize) {
		log.info("save productSize by : {}", iProductSize);
		try {
			return productSizeRepository.save(
					ProductSize.builder()
							.id(iProductSize.getId())
							.product(productRepository.findById(iProductSize.getProductId()).get())
							.size(sizeRepository.findById(iProductSize.getSizeId()).get())
							.build()
			);
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return null;
		}
	}

	@Override
	public List<OProductSize> findAllProductSize() {
		log.info("find all productSize");
		List<OProductSize> oProductSizes = new ArrayList<>();
		try {
			productSizeRepository.findAll().forEach(productSize -> {
				oProductSizes.add(OProductSize.builder()
						.sizeId(productSize.getSize().getId())
						.build());
			});
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
		}
		return oProductSizes;
	}

	@Override
	public OProductSize findByIdProductSize(Long id) {
		log.info("find by id productSize : {}", id);
		OProductSize oProductSize = new OProductSize();
		try {
			ProductSize productSize = productSizeRepository.findById(id).get();
			oProductSize = OProductSize.builder()
					.sizeId(productSize.getSize().getId())
					.build();
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
		}
		return oProductSize;
	}

	@Override
	public void deleteByIdProductSize(Long id) {
		log.info("delete by id productSize : {}", id);
		try {
			productSizeRepository.deleteById(id);
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
		}
	}

	@Override
	public List<OProductSize> findByProductId(Long productId) {
		log.info("find by productId productSize : {}", productId);
		List<OProductSize> oProductSizes = new ArrayList<>();
		try {
			productSizeRepository.findByProductId(productId).forEach(productSize -> {
				oProductSizes.add(OProductSize.builder()
						.sizeId(productSize.getSize().getId())
						.build());
			});
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
		}
		return oProductSizes;
	}

	@Override
	public void deleteAllByProductId(Long productId) {
		log.info("delete by productId productSize : {}", productId);
		try {
			productSizeRepository.deleteAll(productSizeRepository.findByProductId(productId));
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
		}
	}
}