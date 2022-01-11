package beanWood.springBoot.purchase.controller;

import beanWood.springBoot.purchase.dto.PurchaseDto;
import beanWood.springBoot.purchase.model.Purchase;
import beanWood.springBoot.purchase.service.PurchaseService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/purchase")
@RequiredArgsConstructor
@Slf4j
public class PurchaseControllerImpl implements PurchaseController {
	private final PurchaseService purchaseService;

	@Override
	@GetMapping("/find/{id}")
	public Optional<Purchase> findByIdPurchase(@PathVariable Long id) {
		try {
			return purchaseService.findByIdPurchase(id);
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return Optional.empty();
		}
	}

	@Override
	@GetMapping("/findAll")
	public List<Purchase> findAllPurchase() {
		try {
			return purchaseService.findAllPurchase();
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return null;
		}
	}

	@Override
	@DeleteMapping("/delete/{id}")
	public int deleteByIdPurchase(@PathVariable Long id) {
		try {
			purchaseService.deleteByIdPurchase(id);
			return 1;
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return 2;
		}
	}

	@Override
	@PostMapping("/purchase")
	public int saveCartListToPurchase(@RequestBody PurchaseDto purchaseDto) {
		try {
			purchaseService.saveCartListToPurchase(purchaseDto);
			return 1;
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return 2;
		}
	}
}
