package beanWood.springBoot.cartList.service;

import beanWood.springBoot.cartList.dto.ICartList;
import beanWood.springBoot.cartList.model.CartList;
import beanWood.springBoot.cartList.repository.CartListRepository;
import beanWood.springBoot.product.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class CartListServiceImpl implements CartListService {
	private final CartListRepository cartListRepository;
	private final ProductRepository productRepository;

	@Override
	public CartList saveCartList(ICartList iCartList) {
		log.info("save CartList: {}", iCartList.getId());
		if (cartListRepository.findByProductId(iCartList.getProductId()) == null) {
			try {
				return cartListRepository.save(
						CartList.builder()
								.id(iCartList.getId())
								.quantity(iCartList.getQuantity())
								.product(productRepository.findById(iCartList.getProductId()).get())
								.build()
				);
			} catch (Exception e) {
				log.error("Error: {}", e.getMessage());
				return null;
			}
		} else {
			try {
				CartList cartList = cartListRepository.findByProductId(iCartList.getProductId());
				return cartListRepository.save(
						CartList.builder()
								.id(cartList.getId())
								.quantity(cartList.getQuantity() + 1)
								.product(cartList.getProduct())
								.build()
				);
			} catch (Exception e) {
				log.error("Error: {}", e.getMessage());
				return null;
			}
		}
	}

	@Override
	public Optional<CartList> findByIdCartList(Long id) {
		log.info("find CartList By Id: {}", id);
		try {
			return cartListRepository.findById(id);
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return Optional.empty();
		}
	}

	@Override
	public List<CartList> findAllCartList() {
		log.info("find all CartList");
		try {
			return cartListRepository.findAll();
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return null;
		}
	}

	@Override
	public void deleteByIdCartList(Long id) {
		log.info("delete CartList By Id: {}", id);
		try {
			cartListRepository.deleteById(id);
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
		}
	}
}
