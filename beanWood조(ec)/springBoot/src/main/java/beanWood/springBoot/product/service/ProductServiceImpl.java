package beanWood.springBoot.product.service;

import beanWood.springBoot.cartList.repository.CartListRepository;
import beanWood.springBoot.category.repository.CategoryRepository;
import beanWood.springBoot.color.repository.ColorRepository;
import beanWood.springBoot.image.model.Image;
import beanWood.springBoot.image.repository.ImageRepository;
import beanWood.springBoot.product.dto.IProduct;
import beanWood.springBoot.product.model.Product;
import beanWood.springBoot.product.repository.ProductRepository;
import beanWood.springBoot.productColor.model.ProductColor;
import beanWood.springBoot.productColor.repository.ProductColorRepository;
import beanWood.springBoot.productImage.model.ProductImage;
import beanWood.springBoot.productImage.repository.ProductImageRepository;
import beanWood.springBoot.productSize.model.ProductSize;
import beanWood.springBoot.productSize.repository.ProductSizeRepository;
import beanWood.springBoot.size.repository.SizeRepository;
import beanWood.springBoot.wishList.repository.WishListRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class ProductServiceImpl implements ProductService {
	private final ProductRepository productRepository;
	private final CategoryRepository categoryRepository;
	private final ProductColorRepository productColorRepository;
	private final ProductImageRepository productImageRepository;
	private final ProductSizeRepository productSizeRepository;
	private final ImageRepository imageRepository;
	private final ColorRepository colorRepository;
	private final SizeRepository sizeRepository;
	private final CartListRepository cartListRepository;
	private final WishListRepository wishListRepository;

	public Product saveProductBeforeSaveProduct(IProduct iProduct) {
		log.info("Save Product: {}", iProduct);
		try {
			return productRepository.save(Product.builder()
					.id(iProduct.getId())
					.description(iProduct.getDescription())
					.sale(iProduct.getSale())
					.productName(iProduct.getProductName())
					.star(iProduct.getStar())
					.isNew(iProduct.isNew())
					.price(iProduct.getPrice())
					.category(categoryRepository.findById(iProduct.getCategoryId()).get())
					.build());
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return null;
		}
	}

	public List<Long> saveImagesBeforeSaveProduct(IProduct iProduct) {
		try {
			List<Long> imageIds = new ArrayList<>();
			iProduct.getImages().forEach(
					image -> {
						imageIds.add(
								imageRepository.save(Image.builder()
										.imageUrl(image)
										.build()).getId());
					}
			);
			log.info("imageIds: {}", imageIds);
			return imageIds;
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return null;
		}
	}

	@Override
	public Product saveProduct(IProduct iProduct) {
		try {
			log.info("Product save start");
			Product product = saveProductBeforeSaveProduct(iProduct);
			log.info("Product save success, Image and ProductImage save start");
			saveImagesBeforeSaveProduct(iProduct).forEach(
					imageId -> {
						productImageRepository.save(ProductImage.builder()
								.product(productRepository.findById(product.getId()).get())
								.image(imageRepository.findById(imageId).get())
								.build());
					}
			);
			log.info("Image and ProductImage save success, ProductColor save start");
			iProduct.getColorIds().forEach(
					colorId -> {
						productColorRepository.save(ProductColor.builder()
								.product(productRepository.findById(product.getId()).get())
								.color(colorRepository.findById(colorId).get())
								.build());
					}
			);
			log.info("ProductColor save success, ProductSize save start");
			iProduct.getSizeIds().forEach(
					sizeId -> {
						productSizeRepository.save(ProductSize.builder()
								.product(productRepository.findById(product.getId()).get())
								.size(sizeRepository.findById(sizeId).get())
								.build());
					}
			);
			log.info("ProductSize save success, All save success");
			return null;
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return null;
		}
	}

	@Override
	public Optional<Product> findByIdProduct(Long id) {
		log.info("find by id Product: {}", id);
		try {
			return productRepository.findById(id);
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return Optional.empty();
		}
	}

	@Override
	public List<Product> findAllProduct() {
		log.info("find all Product");
		try {
			return productRepository.findAll();
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return null;
		}
	}


	public void deleteProductOptionBeforeDeleteProductById(Long id) {
		log.info("delete Product options by Product id: {}", id);
		try {
			log.info("delete ProductImage by id: {}", id);
			productImageRepository.deleteAll(productImageRepository.findByProductId(id));
			log.info("ProductImage delete success, delete ProductColor by id: {}", id);
			productColorRepository.deleteAll(productColorRepository.findByProductId(id));
			log.info("ProductColor delete success, delete ProductSize by id: {}", id);
			productSizeRepository.deleteAll(productSizeRepository.findByProductId(id));
			log.info(("ProductSize delete success"));
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
		}
	}

	public void deleteCartWishListBeforeDeleteProductById(Long id) {
		log.info("delete CartList and WishList by Product id: {}", id);
		try {
			log.info("delete CartList start by id: {}", id);
			if (cartListRepository.findByProductId(id) != null) {
				cartListRepository.delete(cartListRepository.findByProductId(id));
			} else {
				log.info("not exist in cartList");
			}
			log.info("delete CartList success, delete WishList start by id: {}", id);
			if (wishListRepository.findByProductId(id) != null) {
				wishListRepository.delete(wishListRepository.findByProductId(id));
			} else {
				log.info("not exist in wishList");
			}
			log.info("delete WishList success");
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
		}
	}

	@Override
	public void deleteByIdProduct(Long id) {
		try {
			deleteProductOptionBeforeDeleteProductById(id);
			deleteCartWishListBeforeDeleteProductById(id);
			log.info("delete Product id: {}", id);
			productRepository.deleteById(id);
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
		}
	}

	@Override
	public List<Product> findByCategoryId(Long categoryId) {
		log.info("find Product by category id: {}", categoryId);
		try {
			return productRepository.findByCategoryId(categoryId);
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return null;
		}
	}

	@Override
	public Product updateProduct(IProduct iProduct) {
		try {
			log.info("update Product: {}", iProduct);
			deleteProductOptionBeforeDeleteProductById(iProduct.getId());
			log.info("all delete success, save Product start");
			saveProduct(iProduct);
			return null;
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return null;
		}
	}
}
