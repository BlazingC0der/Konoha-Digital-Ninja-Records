import React, { Component } from "react"
import DisplayProfile from "./profile-display"
import Axios from "axios"
import { Redirect } from "react-router"

class Profile extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: "Blazing Brawler",
			age: 22,
			sex: "Shinobi",
			rank: "Kage",
			style: ["wind","fire"],
		}
	}
	logOut = () => {
		localStorage.setItem("signedIn", false)
		this.props.history.push("/")
	}
	componentDidMount() {
		/*let url = "https://reqres.in/api/users/2" //+ this.props.location.state.ID
		//console.log(url)
		/*Axios.get(url).then(res => {
			console.log(res)
			this.setState({
				age: res.data.age,
				sex: res.data.sex,
				rank: res.data.rank,
				style: res.data.style,
			})
		})*/
	}
	render() {
		return (
			<DisplayProfile
				Name={this.state.name}
				Age={this.state.age}
				Sex={this.state.sex}
				Rank={this.state.rank}
				Style={this.state.style}
				logOut={this.logOut}
			/>
		)
	}
}

export default Profile
