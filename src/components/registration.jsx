import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import "./registration.css"
import axios from "axios"
import Select from "react-select"
import makeAnimated from "react-select/animated"

class Register extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: "",
			age: null,
			sex: "",
			rank: "",
			style: [],
			speciality: [],
			id: "",
			redirect: false,
		}
	}
	componentDidMount() {
		/*this.setState({
			name: this.props.location.state.Name,
		})*/
	}
	handleSubmit = e => {
		e.preventDefault()
		axios
			.post("https://reqres.in/api/users", {
				name: this.state.name,
				age: this.state.age,
				sex: this.state.sex,
				rank: this.state.rank,
				style: this.state.style,
				speciality: this.state.speciality,
			})
			.then(res => {
				this.setState({ redirect: 1, id: res.data.id })
				console.log(res)
			})
	}
	handleChange = e => {
		if (e.target.name === "style" || e.target.name === "speciality") {
			let tempAr = [...this.state.style, e.taregt.value]
			this.setState({ style: tempAr })
		} else {
			this.setState({ [e.target.name]: e.target.value })
		}
	}
	render() {
		const MainConatiner = {
			height: "100vh",
			background:
				"linear-gradient(198deg, rgba(19, 190, 85, 1) 0%, #067858 100%)",
		}
		const ImgStyle = {
			height: "50px",
			width: "50px",
			marginTop: "2%",
			marginLeft: "45.3%",
		}
		const HeaderStyle = {
			backgroundColor: "white",
			height: "10%",
			width: "40%",
			marginLeft: "30%",
			borderTopLeftRadius: "30px",
			borderTopRightRadius: "30px",
			borderTop: "10px solid #abeaa0",
		}
		const FooterStyle = {
			display: "flex",
			alignItems: "center",
			backgroundColor: "#abeaa0",
			height: "8%",
			width: "40%",
			marginLeft: "30%",
			borderBottomLeftRadius: "30px",
			borderBottomRightRadius: "30px",
		}
		const FormStyle = {
			height: "75%",
			width: "40%",
			backgroundColor: "white",
			marginLeft: "30%",
		}
		const FlexStyle1 = {
			display: "flex",
			flexDirection: "column",
			height: "80%",
		}
		const FlexStyle2 = {
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center",
			flexDirection: "column",
			marginTop: "5%",
			marginLeft: "10%",
		}
		const FlexStyle3 = {
			flexDirection: "column",
			display: "flex",
			width: "40%",
			marginRight: "5%",
		}
		const FlexStyle4 = {
			flexDirection: "row",
			justifyContent: "space-between",
			display: "flex",
			marginBottom: "2%",
		}
		const LabelStyle = {
			fontVariant: "small-caps",
			fontSize: "120%",
		}
		const InputStyle = {
			border: "none",
			borderBottom: "5px solid #05f883",
			borderRadius: "10px",
			width: "85%",
			height: "6.7vh",
			marginBottom: "10%",
			fontSize: "2.5vh",
		}
		const InputStyleSex = {
			border: "none",
			borderBottom: "5px solid #05f883",
			borderRadius: "10px",
			width: "120%",
			height: "6.7vh",
			marginBottom: "8%",
			fontSize: "2.5vh",
		}
		const InputStyleAge = {
			border: "none",
			borderBottom: "5px solid #05f883",
			borderRadius: "10px",
			width: "30%",
			height: "6.7vh",
			marginBottom: "8%",
			fontSize: "2.5vh",
		}
		const TitleStyle = {
			fontWeight: "bold",
			color: "#053b05",
			fontSize: "230%",
			marginLeft: "27%",
			fontStretch: "ultra-expanded",
			fontFamily: "kanji",
			textShadow:
				"3px 3px 0 #516441, -1px -1px 0 #516441, 1px -1px 0 #516441, -1px 1px 0 #516441, 1px 1px 0 #516441",
		}
		const SubStyle = {
			fontWeight: "bold",
			color: "#053b05",
			fontSize: "200%",
			marginLeft: "35%",
			fontStretch: "ultra-expanded",
			fontFamily: "kanji",
			textShadow: "0px 0px 4px rgb(61, 255, 2)",
		}
		const customStyles = {
			input: (state) => ({
				border: "none",
				borderBottom: state.isFocused
					? "5px solid #17bd17"
					: "5px solid #05f883",
				borderRadius: "10px",
				width: "85%",
				height: "6.7vh",
				marginBottom: "10%",
				fontSize: "2.5vh",
			}),
		}
		const styleOptions = [
			{ value: "wind", label: "Wind" },
			{ value: "fire", label: "Fire" },
			{ value: "water", label: "Water" },
			{ value: "earth", label: "Earth" },
			{ value: "lightning", label: "Lightning" },
		]
		const specialityOptions = [
			{ value: "jinchuriki", label: "Jinchuriki" },
			{ value: "sage", label: "Sage" },
			{ value: "anbu", label: "Anbu" },
			{ value: "none", label: "None" },
		]
		if (!this.state.redirect) {
			return (
				<div className="container" style={MainConatiner}>
					<div className="row" style={{ height: "4%" }}></div>
					<header style={HeaderStyle}>
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Simbolo_konoha.svg"
							alt="logo"
							style={ImgStyle}
						/>
					</header>
					<div className="container" style={FormStyle}>
						<h1 style={TitleStyle}>Registration</h1>
						<form onSubmit={this.handleSubmit}>
							<div className="container" style={FlexStyle1}>
								<div className="container" style={FlexStyle2}>
									<div className="container" style={FlexStyle4}>
										<div
											className="container"
											style={{ marginLeft: "14%" }}
										>
											<label htmlFor="sex" style={LabelStyle}>
												Sex
											</label>
											<select
												name="sex"
												id="sex"
												style={InputStyleSex}
												onChange={this.handleChange}
											>
												<option selected hidden disbaled>
													Select Gender
												</option>
												<option value="shinobi">Shinobi</option>
												<option value="kunoichi">Kunoichi</option>
											</select>
										</div>
										<div
											className="container"
											style={{ marginLeft: "8%" }}
										>
											<label htmlFor="age" style={LabelStyle}>
												Age
											</label>
											<input
												type="number"
												id="age"
												name="age"
												placeholder="enter age"
												style={InputStyleAge}
												onChange={this.handleChange}
											/>
										</div>
									</div>
									<div className="container" style={FlexStyle3}>
										<label htmlFor="rank" style={LabelStyle}>
											Rank
										</label>
										<select
											name="rank"
											id="rank"
											style={InputStyle}
											onChange={this.handleChange}
										>
											<option selected hidden disabled>
												Select Rank
											</option>
											<option value="genin">Genin</option>
											<option value="chunin">Chunin</option>
											<option value="jonin">Jonin</option>
											<option value="kage">Kage</option>
										</select>
										<label htmlFor="style" style={LabelStyle}>
											Style
										</label>
										<Select
											closeMenuOnSelect={false}
											components={makeAnimated()}
											isMulti
											options={styleOptions}
											styles={customStyles}
										/>
										{/*<select
											name="style"
											id="style"
											style={InputStyle}
											onChange={this.handleChange}
										>
											<option selected hidden disabled>
												Select Style
											</option>
											<option value="wind">Wind</option>
											<option value="fire">Fire</option>
											<option value="water">Water</option>
											<option value="earth">Earth</option>
											<option value="lightning">Lightning</option>
										</select>*/}
										<label htmlFor="speciality" style={LabelStyle}>
											Speciality
										</label>
										<Select
											closeMenuOnSelect={false}
											components={makeAnimated()}
											isMulti
											options={specialityOptions}
											styles={customStyles}
										/>
										{/*<select
											name="speciality"
											id="speciality"
											style={InputStyle}
											onChange={this.handleChange}
										>
											<option selected value="none">
												None
											</option>
											<option value="jinchuriki">Jinchuriki</option>
											<option value="sage">Sage</option>
											<option value="anbu">Anbu</option>
										</select>*/}
									</div>
								</div>
								<input
									type="submit"
									value="Submit"
									className="ButtonStyle"
									onSubmit={this.handleSubmit}
								/>
							</div>
						</form>
					</div>
					<div className="container" style={FooterStyle}>
						<h2 style={SubStyle}> K O N O H A</h2>
					</div>
				</div>
			)
		} else {
			return <Redirect to="/user" />
		}
	}
}

export default Register
