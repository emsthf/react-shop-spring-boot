package beanWood.springBoot.size.controller;

import beanWood.springBoot.size.model.Size;
import beanWood.springBoot.size.service.SizeService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/size")
@RequiredArgsConstructor
@Slf4j
public class SizeControllerImpl implements SizeController {
	private final SizeService sizeService;

	@Override
	@PostMapping("/save")
	public int saveSize(@RequestBody Size size) {
		try {
			if (sizeService.saveSize(size) == null) return 2;
			return 1;
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return 2;
		}
	}

	@Override
	@PutMapping("/update")
	public int updateSize(@RequestBody Size size) {
		try {
			if (sizeService.saveSize(size) == null) return 2;
			return 1;
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return 2;
		}
	}

	@Override
	@GetMapping("/find/{id}")
	public Optional<Size> findByIdSize(@PathVariable Long id) {
		try {
			return sizeService.findByIdSize(id);
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return Optional.empty();
		}
	}

	@Override
	@GetMapping("/findAll")
	public List<Size> findAllSize() {
		try {
			return sizeService.findAllSize();
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return null;
		}
	}

	@Override
	@DeleteMapping("/delete/{id}")
	public int deleteByIdSize(@PathVariable Long id) {
		try {
			return sizeService.deleteByIdSize(id);
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return 2;
		}
	}
}