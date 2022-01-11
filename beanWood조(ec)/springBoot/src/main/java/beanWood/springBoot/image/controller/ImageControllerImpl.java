package beanWood.springBoot.image.controller;

import beanWood.springBoot.image.model.Image;
import beanWood.springBoot.image.service.ImageService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/image")
@RequiredArgsConstructor
@Slf4j
public class ImageControllerImpl implements ImageController {
	private final ImageService imageService;

	@Override
	@PostMapping("/save")
	public int saveImage(@RequestBody Image image) {
		try {
			if(imageService.saveImage(image) == null) return 2;
			return 1;
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return 2;
		}
	}

	@Override
	@PutMapping("/update")
	public int updateImage(@RequestBody Image image) {
		try {
			if(imageService.saveImage(image) == null) return 2;
			return 1;
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return 2;
		}
	}

	@Override
	@GetMapping("/find/{id}")
	public Optional<Image> findByIdImage(@PathVariable Long id) {
		try {
			return imageService.findByIdImage(id);
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return Optional.empty();
		}
	}

	@Override
	@GetMapping("/findAll")
	public List<Image> findAllImage() {
		try {
			return imageService.findAllImage();
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return null;
		}
	}

	@Override
	@DeleteMapping("/delete/{id}")
	public int deleteByIdImage(@PathVariable Long id) {
		try {
			imageService.deleteByIdImage(id);
			return 1;
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return 2;
		}
	}
}
