package beanWood.springBoot.user.controller;

import beanWood.springBoot.user.dto.IUser;
import beanWood.springBoot.user.dto.OUser;
import beanWood.springBoot.user.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/user")
@RequiredArgsConstructor
@Slf4j
public class UserControllerImpl implements UserController {
	private final UserService userService;

//	@Override
//	@PostMapping("/save")
//	public ResponseEntity<User> saveUser(@RequestBody User user) {
//		URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/user/save").toUriString());
//		return ResponseEntity.created(uri).body(userService.saveUser(user));
//	}

	@Override
	@PostMapping("/save")
	public int saveUser(@RequestBody IUser iUser) {
		try {
			URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/user/save").toUriString());
			ResponseEntity.created(uri).body(userService.saveUser(iUser));
			return 1;
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return 2;
		}
	}

	@Override
	@PutMapping("/update")
	public int updateUser(@RequestBody IUser iUser) {
		try {
			if (userService.saveUser(iUser) == null) return 2;
			return 1;
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return 2;
		}
	}

	@Override
	@GetMapping("/find/{id}")
	public OUser findByIdUser(@PathVariable Long id) {
		try {
			return userService.findByIdUser(id);
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return null;
		}
	}

	@Override
	@GetMapping("/findAll")
	public List<OUser> findAllUser() {
		try {
			return userService.findAllUser();
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return null;
		}
	}

	@Override
	@DeleteMapping("/delete/{id}")
	public int deleteByIdUser(@PathVariable Long id) {
		try {
			userService.deleteByIdUser(id);
			return 1;
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return 2;
		}
	}

	@Override
	@GetMapping("/findByUserName/{userName}")
	public OUser findByUserName(@PathVariable String userName) {
		try {
			return userService.findByUserName(userName);
		} catch (Exception e) {
			log.error("Error: {}", e.getMessage());
			return null;
		}
	}
}
