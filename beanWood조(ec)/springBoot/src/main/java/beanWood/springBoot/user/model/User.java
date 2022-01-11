package beanWood.springBoot.user.model;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;

import static javax.persistence.FetchType.EAGER;

@Data
@Entity
@NoArgsConstructor
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String userName;
	private String userPassword;
	private String userAddress;
	private String userNumber;
	private String name;
	@ManyToMany(fetch = EAGER)
	private Collection<Role> roles = new ArrayList<>();

	@Builder
	public User(Long id, String userName, String userPassword, String userAddress, String userNumber, String name, Collection<Role> roles) {
		this.id = id;
		this.userName = userName;
		this.userPassword = userPassword;
		this.userAddress = userAddress;
		this.userNumber = userNumber;
		this.name = name;
		this.roles = roles;
	}
}
