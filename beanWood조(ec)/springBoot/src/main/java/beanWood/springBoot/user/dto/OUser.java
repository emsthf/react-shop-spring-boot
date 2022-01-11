package beanWood.springBoot.user.dto;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class OUser {
	private Long id;
	private String userAddress;
	private String userNumber;
	private String userName;
	private String name;

	@Builder
	public OUser(Long id, String userAddress, String userNumber, String userName, String name) {
		this.id = id;
		this.userAddress = userAddress;
		this.userNumber = userNumber;
		this.userName = userName;
		this.name = name;
	}
}
