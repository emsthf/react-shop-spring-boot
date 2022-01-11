package beanWood.springBoot.user.controller;

import beanWood.springBoot.user.dto.RoleToUserForm;
import beanWood.springBoot.user.model.Role;
import org.springframework.http.ResponseEntity;

public interface RoleController {
	ResponseEntity<Role> saveRole(Role role);

	ResponseEntity<?> addRoleToUSer(RoleToUserForm roleToUserForm);
}
