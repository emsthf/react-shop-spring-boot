package beanWood.springBoot.sliderList.controller;

import beanWood.springBoot.sliderList.dto.ISliderList;
import beanWood.springBoot.sliderList.model.SliderList;

import java.util.List;
import java.util.Optional;

public interface SliderListController {
	int saveSliderList(ISliderList isliderList);

	int updateSliderList(ISliderList iSliderList);

	Optional<SliderList> findByIdSliderList(Long id);

	List<SliderList> findAllSliderList();

	int deleteByIdSliderList(Long id);
}
