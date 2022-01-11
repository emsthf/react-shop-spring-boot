import axios from "axios";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

function Login() {
	const navigate = useNavigate();

	const userUrl = "http://localhost:8080/user/findByUserName/";
	// const loginUrl = "http://localhost:8080/user/login";
	const userName = useRef();
	const userPassword = useRef();


	const addSignup = (e) => {
		e.preventDefault();

		// axios.post(loginUrl, {
		// 	userName: userName.current.value,
		// 	password: userPassword.current.value
		// }).then(Response => console.log(Response.data));


		axios.get(userUrl + userName.current.value).then(Response => {
			if (Response.data.userName === userName.current.value) {
				alert("로그인 성공");
				navigate("/");
			} else {
				alert("아이디를 확인해 주세요.")
			}
		})
	}

	return (
		<section className="login-area pt-100 pb-100">
			<div className="container">
				<div className="row">
					<div className="col-lg-8 offset-lg-2">
						<div className="basic-login">
							<div className="text-center">
								<i className="fas fa-door-open iconSize3 iconColor"></i>
							</div>
							<h3 className="text-center mb-60">Login From Here</h3>
							<form onSubmit={addSignup}>
								<label htmlFor="name">ID<span>**</span></label>
								<input id="name" type="text" placeholder="아이디를 입력하세요." ref={userName} />
								<label htmlFor="pass">PASSWORD <span>**</span></label>
								<input id="pass" type="password" placeholder="비밀번호를 입력하세요." ref={userPassword} />
								<div className="login-action mb-20 fix">
									<span className="log-rem f-left">
										<input id="remember" type="checkbox" />
										<label htmlFor="remember">Remember me!</label>
									</span>
									<span className="forgot-login f-right">
										<span>Lost your password?</span>
									</span>
								</div>
								<button className="btn theme-btn-2 w-100">로그인 하기</button>
								<div className="or-divide"><span>or</span></div>
								<button className="btn theme-btn w-100"><Link to="/signup">회원가입 하기</Link></button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Login;