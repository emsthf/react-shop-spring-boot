package beanWood.springBoot.user.service;

import beanWood.springBoot.user.model.Role;

public interface RoleService {
	Role saveRole(Role role);

	void saveRoleByUserName(String userName, String roleName);
}
