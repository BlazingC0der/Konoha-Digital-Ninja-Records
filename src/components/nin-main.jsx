import React from "react"
import { Route } from "react-router-dom"
import Profile from "./profile"

const BgConatiner = {
	height: "100vh",
	background: "linear-gradient(198deg, rgba(19, 190, 85, 1) 0%, #067858 100%)",
}

const NinMain = () => (
	<div className="container" style={BgConatiner}>
		<Route path="/user/" exact component={Profile} />
	</div>
)

export default NinMain
