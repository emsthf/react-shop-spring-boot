package beanWood.springBoot.user.dto;

import lombok.Data;

@Data
public class IUser {
	private Long id;
	private String userPassword;
	private String userAddress;
	private String userNumber;
	private String userName;
	private String name;
}
