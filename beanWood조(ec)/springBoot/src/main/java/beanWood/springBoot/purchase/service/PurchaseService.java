package beanWood.springBoot.purchase.service;

import beanWood.springBoot.purchase.dto.PurchaseDto;
import beanWood.springBoot.purchase.model.Purchase;

import java.util.List;
import java.util.Optional;

public interface PurchaseService {
	Optional<Purchase> findByIdPurchase(Long id);

	List<Purchase> findAllPurchase();

	void deleteByIdPurchase(Long id);

	void saveCartListToPurchase(PurchaseDto purchaseDto);
}
