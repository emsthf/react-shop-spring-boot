package beanWood.springBoot.user.service;

import beanWood.springBoot.user.dto.IUser;
import beanWood.springBoot.user.model.User;
import beanWood.springBoot.user.dto.OUser;

import java.util.List;

public interface UserService {
//	User saveUser(User user);

	User saveUser(IUser iUser);

	OUser findByIdUser(Long id);

	List<OUser> findAllUser();

	void deleteByIdUser(Long id);

	OUser findByUserName(String userName);
}
