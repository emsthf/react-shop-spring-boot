package beanWood.springBoot.user.repository;

import beanWood.springBoot.user.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
	User findByUserName(String userName);
}
