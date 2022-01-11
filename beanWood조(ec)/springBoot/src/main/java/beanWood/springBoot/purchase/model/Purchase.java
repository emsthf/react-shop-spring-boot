package beanWood.springBoot.purchase.model;

import beanWood.springBoot.product.model.Product;
import beanWood.springBoot.user.model.User;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@NoArgsConstructor
public class Purchase {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;
    private int quantity;

    private String shipMemo;

    @Builder
    public Purchase(Long id, User user, Product product, int quantity, String shipMemo) {
        this.id = id;
        this.user = user;
        this.product = product;
        this.quantity = quantity;
        this.shipMemo = shipMemo;
    }
}
