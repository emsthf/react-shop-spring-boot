package beanWood.springBoot.sliderList.model;

import beanWood.springBoot.image.model.Image;
import beanWood.springBoot.product.model.Product;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
public class SliderList {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String eventName;
    @ManyToOne
    @JoinColumn(name = "image_id")
    private Image image;
    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    @Builder
    public SliderList(Long id, String eventName, Image image, Product product) {
        this.id = id;
        this.eventName = eventName;
        this.image = image;
        this.product = product;
    }
}
