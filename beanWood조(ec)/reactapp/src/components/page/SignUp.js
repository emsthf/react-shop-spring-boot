import axios from "axios";
import React, { useCallback, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'



function SignUp() {
	const navigate = useNavigate();

	const userUrl = "http://localhost:8080/user/save";
	const userIdCheckUrl = `http://localhost:8080/user/findByUserName/`;

	const userId = useRef();
	const userAddress = useRef();
	const userPassword = useRef();
	const userName = useRef();
	const userNumber = useRef();



	const [passwordCheck, setPasswordCheck] = useState('');


	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');

	const [nameMessage, setNameMessage] = useState('');
	const [PasswordMessage, setPasswordMessage] = useState('');
	const [phoneNumberMessage, setPhoneNumberMessage] = useState('');
	const [passwordCheckMessage, setPasswordCheckMessage] = useState('');

	const [isId, setIsId] = useState('');
	const [isName, setIsName] = useState('');
	const [isPassword, setIsPassword] = useState('');
	const [isPasswordCheck, setIsPasswordCheck] = useState('');
	const [isPhoneNumber, setIsPhoneNumber] = useState('');

	//회원가입 START
	const addUser = (e) => {
		e.preventDefault();
		axios.get(userIdCheckUrl + userId.current.value).then(Response => {
			if (Response.data) {
				alert("이미 사용중인 ID 입니다.");
				setIsId(false)
			} else {
				axios.post(userUrl, {
					userName: userId.current.value,
					userAddress: userAddress.current.value,
					userPassword: userPassword.current.value,
					name: userName.current.value,
					userNumber: userNumber.current.value
				}).then(Response => {
					if (Response.data === 1) {
						alert("가입에 성공하였습니다. 로그인해주세요.");
						navigate("/login");
					}
				});
			}
		})


	}
	//회원가입 END

	//아이디 중복 체크 START
	const checkUserId = (e) => {
		e.preventDefault();
		axios.get(userIdCheckUrl + userId.current.value).then(Response => {
			if (Response.data) {
				alert("이미 사용중인 ID 입니다.");
				setIsId(false)
			} else {
				alert("사용 가능한 ID 입니다.");
				setIsId(true)
			}
		})
	}
	//아이디 중복 체크 END

	//NAME REGEX START
	const onChangeName = useCallback((e) => {
		e.preventDefault();
		const nameRegex = /^[가-힣a-zA-z]/
		const nameCurrent = e.target.value
		setName(nameCurrent)
		if (!nameRegex.test(nameCurrent)) {
			setNameMessage('특수문자와 숫자는 사용 불가 합니다.')
			setIsName(false)
		} else {
			setNameMessage('올바른 형식 입니다.')
			setIsName(true)
		}
	}, [])
	//NAME REGEX END

	//PHONE-NUMBER REGEX START
	const onChangePhoneNumber = useCallback((e) => {
		e.preventDefault();
		const phoneNumberRegex = /^(010|011|016|017|018|019)-\d{3,4}-\d{4}$/
		const phoneNumberCurrent = e.target.value
		setPhoneNumber(phoneNumberCurrent)
		if (!phoneNumberRegex.test(phoneNumberCurrent)) {
			setPhoneNumberMessage('하이픈(-)을 포함해서 숫자 11자리를 쓰세요.')
			setIsPhoneNumber(false)
		} else {
			setPhoneNumberMessage('올바른 전화번호 형식 입니다.')
			setIsPhoneNumber(true)
		}
	}, [])
	//PHONE-NUMBER REGEX END

	//Password REGEX START
	const onChangePassword = useCallback((e) => {
		e.preventDefault();
		const passwordRegex = /^[0-9].{3,25}$/
		const passwordCurrent = e.target.value
		setPassword(passwordCurrent)
		if (!passwordRegex.test(passwordCurrent)) {
			setPasswordMessage('숫자 4자리~24자리로 비밀번호를 만들어주세요.')
			setIsPassword(false)
		} else {
			setPasswordMessage('올바른 비밀번호 입니다.')
			setIsPassword(true)
		}
	}, [])
	//Password REGEX END

	//PasswordCheck  START
	const onChangePasswordCheck = useCallback((e) => {
		e.preventDefault();
		const passwordCheckCurrent = e.target.value
		setPasswordCheck(passwordCheckCurrent)
		if (password === passwordCheckCurrent) {
			setPasswordCheckMessage('일치합니다.')
			setIsPasswordCheck(true)
		} else {
			setPasswordCheckMessage('일치하지 않습니다.')
			setIsPasswordCheck(false)
		}
	}, [password])
	//PasswordCheck END



	return (
		<section className="login-area pt-100 pb-100">
			<div className="container">
				<div className="row">
					<div className="col-lg-8 offset-lg-2">
						<div className="basic-login">
							<div className="text-center"><i className="fas fa-user-plus iconSize3 iconColor"></i>
							</div>
							<h3 className="text-center mb-60">Signup From Here</h3>
							<form onSubmit={addUser} >
								<div>
									<label htmlFor="id">ID <span>**</span></label>
									<input id="id" type="text" placeholder="사용하실 아이디를 입력해주세요." ref={userId} />
									<button className="btn theme-btn" onClick={checkUserId}>ID 중복 확인</button>
								</div>
								<label htmlFor="password">Password <span>**</span></label>
								<input id="password" type="password" onChange={onChangePassword} placeholder="사용하실 비밀번호를 입력하세요." ref={userPassword} />
								{password.length > 0 && <span className={`message ${isPassword ? 'success' : 'error'}`}>{PasswordMessage}</span>}

								<label htmlFor="passwordconfirm">Password Confirm <span>**</span></label>
								<div>
									<input id="PasswordCheck" type="password" onChange={onChangePasswordCheck} placeholder="사용하실 비밀번호를 한 번 더 입력하세요." />
									{passwordCheck.length > 0 && <span className={`message ${isPasswordCheck ? 'success' : 'error'}`}>{passwordCheckMessage}</span>}
								</div>

								<label htmlFor="pass">Address <span>**</span></label>
								<input id="pass" type="text" placeholder="사용하실 주소를 입력하세요." ref={userAddress} />

								<label htmlFor="name">Name <span>**</span></label>
								<input id="name" type="text" onChange={onChangeName} placeholder="성함을 입력하세요." ref={userName} />
								{name.length > 0 && <span className={`message ${isName ? 'success' : 'error'}`}>{nameMessage}</span>}

								<label htmlFor="phoneNumber">PhoneNumber <span>**</span></label>
								<input id="phoneNumber" type="text" onChange={onChangePhoneNumber} placeholder="전화번호를 입력하세요.('-'을 포함해서 숫자 11자리를 쓰세요.)" ref={userNumber} />
								{phoneNumber.length > 0 && <span className={`message ${isPhoneNumber ? 'success' : 'error'}`}>{phoneNumberMessage}</span>}
								<div className="mt-10"></div>
								<button className="btn theme-btn-2 w-100" type="activation" disabled={!(isId && isPassword && isPasswordCheck && isName && isPhoneNumber)}>회원가입하기</button>
								<div className="or-divide"><span>or</span></div>
								<button className="btn theme-btn w-100"><Link to="/login">로그인 하기</Link></button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}


export default SignUp;