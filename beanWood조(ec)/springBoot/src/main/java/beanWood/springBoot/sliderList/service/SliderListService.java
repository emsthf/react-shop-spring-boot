package beanWood.springBoot.sliderList.service;

import beanWood.springBoot.sliderList.dto.ISliderList;
import beanWood.springBoot.sliderList.model.SliderList;

import java.util.List;
import java.util.Optional;

public interface SliderListService {
    SliderList saveSliderList(ISliderList iSliderList);

    Optional<SliderList> findByIdSliderList(Long id);

    List<SliderList> findAllSliderList();

    void deleteByIdSliderList(Long id);
}
