package beanWood.springBoot.bannerCard.model;

import beanWood.springBoot.image.model.Image;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
public class BannerCard {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String tag;
    private  String title;
    private String text;
    @ManyToOne
    @JoinColumn(name = "image_id")
    public Image image;

    @Builder
    public BannerCard(Long id, String tag, String title, String text, Image image) {
        this.id = id;
        this.tag = tag;
        this.title = title;
        this.text = text;
        this.image = image;
    }
}
