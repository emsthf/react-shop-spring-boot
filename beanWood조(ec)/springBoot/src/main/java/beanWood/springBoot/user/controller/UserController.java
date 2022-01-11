package beanWood.springBoot.user.controller;

import beanWood.springBoot.user.dto.IUser;
import beanWood.springBoot.user.dto.OUser;

import java.util.List;

public interface UserController {
//	ResponseEntity<User> saveUser(User user);

	int saveUser(IUser iUser);

	int updateUser(IUser iUser);

	OUser findByIdUser(Long id);

	List<OUser> findAllUser();

	int deleteByIdUser(Long id);

	OUser findByUserName(String userName);
}
