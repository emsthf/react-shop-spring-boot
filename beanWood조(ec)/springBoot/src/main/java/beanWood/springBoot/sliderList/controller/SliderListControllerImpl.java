package beanWood.springBoot.sliderList.controller;

import beanWood.springBoot.sliderList.dto.ISliderList;
import beanWood.springBoot.sliderList.model.SliderList;
import beanWood.springBoot.sliderList.service.SliderListService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/sliderList")
@RequiredArgsConstructor
@Slf4j
public class SliderListControllerImpl implements SliderListController {
	private final SliderListService sliderListService;

	@Override
	@PostMapping("/save")
	public int saveSliderList(@RequestBody ISliderList iSliderList) {
		try {
			if(sliderListService.saveSliderList(iSliderList) == null) return 2;
			return 1;
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return 2;
		}
	}

	@Override
	@PutMapping("/update")
	public int updateSliderList(@RequestBody ISliderList iSliderList) {
		try {
			if(sliderListService.saveSliderList(iSliderList) == null) return 2;
			return 1;
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return 2;
		}
	}

	@Override
	@GetMapping("/find/{id}")
	public Optional<SliderList> findByIdSliderList(@PathVariable Long id) {
		try {
			return sliderListService.findByIdSliderList(id);
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return Optional.empty();
		}
	}

	@Override
	@GetMapping("/findAll")
	public List<SliderList> findAllSliderList() {
		try {
			return sliderListService.findAllSliderList();
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return null;
		}
	}

	@Override
	@DeleteMapping("/delete/{id}")
	public int deleteByIdSliderList(@PathVariable Long id) {
		try {
			sliderListService.deleteByIdSliderList(id);
			return 1;
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return 2;
		}
	}
}
