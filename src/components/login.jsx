import React, { Component } from "react"
import "./login.css"
import Background from "../images/konoha.jpg"
import { Redirect } from "react-router"
import { GoogleLogin } from "react-google-login"
import Register from "./registration"
import Profile from "./profile"

class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: "",
			password: "",
			id: null,
			name: "",
		}
	}
	componentDidMount() {
		if (localStorage.getItem("signedIn") === true) {
			this.props.history.replace("/user")
		}
	}
	changeHandle = e => {
		this.setState({ [e.target.name]: e.target.value })
	}
	onSignIn = googleUser => {
		let profile = googleUser.getBasicProfile()
		console.log("ID: " + profile.getId()) // Do not send to your backend! Use an ID token instead.
		console.log("Name: " + profile.getName())
		this.setState({
			id: profile.getId(),
			name: profile.getName(),
		})
		if (googleUser) {
			if (localStorage.getItem("userData") == null) {
				localStorage.setItem("userData", googleUser)
				localStorage.setItem("signedIn", true)
				this.props.history.push({pathname:"/registration",state:{Name:this.state.name}})
			} else {
				localStorage.setItem("signedIn", true)
				this.props.history.push("/user")
			}
		}
	}
	render() {
		const InputStyle = {
			width: "100%",
			height: "7vh",
			marginBottom: "15%",
			border: "3px solid #195f55",
			borderRadius: "10px",
		}
		const LabelStyle = {
			float: "left",
			fontSize: "20px",
		}
		const ImgStyle = {
			height: "20%",
			width: "20%",
			marginLeft: "38%",
		}
		const HeaderStyle = {
			backgroundColor: "transparent",
			margin: "auto",
		}

		return (
			<div className="limiter">
				<div
					className="container-login100"
					style={{ backgroundImage: `url(${Background})` }}
				>
					<div className="wrap-login100">
						<header style={HeaderStyle}>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Simbolo_konoha.svg"
								alt="logo"
								style={ImgStyle}
							/>
						</header>
						<form className="login100-form validate-form">
							<span
								className="login100-form-title p-b-34 p-t-27"
								style={{
									marginBottom: "8%",
									fontSize: "40px",
									fontWeight: "bolder",
									color: "#113733",
									marginTop: "5%",
								}}
							>
								Log in
							</span>

							<div data-validate="Enter username">
								<label htmlFor="username" style={LabelStyle}>
									Username
								</label>
								<input
									style={InputStyle}
									type="text"
									name="username"
									placeholder="Username"
								/>
							</div>

							<div data-validate="Enter password">
								<label htmlFor="password" style={LabelStyle}>
									Password
								</label>
								<input
									style={InputStyle}
									type="password"
									name="password"
									placeholder="Password"
								/>
							</div>
							<div className="container-login100-form-btn">
								<button className="login100-form-btn">Login</button>
							</div>
							<div
								style={{
									fontWeight: "lighter",
									opacity: "0.5",
									marginTop: "5%",
									marginBottom: "5%",
									marginLeft: "28.5%",
								}}
							>
								Don't have an Account?
							</div>
							<div className="container-login100-form-btn">
								<GoogleLogin
									clientId="138218954242-a49vpro9tocuc1j2jtph45jij0d56qat.apps.googleusercontent.com"
									buttonText="Login"
									onSuccess={this.onSignIn}
									cookiePolicy={"single_host_origin"}
									//isSignedIn={true}
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default Login
