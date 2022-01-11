package beanWood.springBoot.color.controller;

import beanWood.springBoot.color.model.Color;
import beanWood.springBoot.color.service.ColorService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/color")
@RequiredArgsConstructor
@Slf4j
public class ColorControllerImpl implements ColorController {
	private final ColorService colorService;

	@Override
	@PostMapping("/save")
	public int saveColor(@RequestBody Color color) {
		try {
			if (colorService.saveColor(color) == null) return 2;
			return 1;
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return 2;
		}
	}

	@Override
	@PutMapping("/update")
	public int updateColor(@RequestBody Color color) {
		try {
			if (colorService.saveColor(color) == null) return 2;
			return 1;
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return 2;
		}
	}

	@Override
	@GetMapping("/find/{id}")
	public Optional<Color> findByIdColor(@PathVariable Long id) {
		try {
			return colorService.findByIdColor(id);
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return Optional.empty();
		}
	}

	@Override
	@GetMapping("/findAll")
	public List<Color> findAllColor() {
		try {
			return colorService.findAllColor();
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return null;
		}
	}

	@Override
	@DeleteMapping("/delete/{id}")
	public int deleteByIdColor(@PathVariable Long id) {
		try {
			return colorService.deleteByIdColor(id);
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return 2;
		}
	}
}
