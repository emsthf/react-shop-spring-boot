package beanWood.springBoot.purchase.repository;

import beanWood.springBoot.purchase.model.Purchase;
import beanWood.springBoot.wishList.model.WishList;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PurchaseRepository extends JpaRepository<Purchase, Long> {
}
