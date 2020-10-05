import React from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./components/login"
import Register from "./components/registration"
import NinMain from "./components/nin-main"

const App = () => (
	<div>
		<Router>
			<Register />
		</Router>
		{/*<Router>
			<Switch>
				<Route path="/" exact component={Login} />
				<Route path="/user" component={NinMain} />
				<Route path="/registration" component={Register} />
			</Switch>
		</Router>*/}
	</div>
)

export default App
