package beanWood.springBoot.category.model;

import beanWood.springBoot.image.model.Image;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String categoryName;
    @ManyToOne
    @JoinColumn(name = "image_id")
    private Image image;

    @Builder
    public Category(Long id, String categoryName, Image image) {
        this.id = id;
        this.categoryName = categoryName;
        this.image = image;
    }
}
