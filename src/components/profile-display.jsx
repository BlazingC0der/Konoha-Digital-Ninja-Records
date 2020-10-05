import React, { Component } from "react"
import { Redirect } from "react-router"

const MainContainer = {
	height: "85%",
	width: "80%",
	backgroundColor: "white",
	marginLeft: "10%",
	borderBottomLeftRadius: "70px",
	borderBottomRightRadius: "70px",
	borderLeft: "solid 10px #f26500",
	borderRight: "solid 10px #e18e14",
}
const FlexStyle = {
	display: "flex",
	justifyContent: "space-between",
	marginRight: "35%",
	marginLeft: "8%",
	marginTop: "8.5%",
}
const BtnStyle = {
	float: "right",
	border: "4px solid #259d1f",
	height: "10%",
	width: "12%",
	color: "#259d1f",
	marginRight: "3%",
	marginTop: "1.5%",
	borderRadius: "5px",
}

const DisplayProfile = props => (
		<div className="container" style={MainContainer}>
			<button style={BtnStyle} onClick={() => props.logOut()}>
				Log Out
			</button>
			<div className="row" style={{ height: "10%" }}></div>
			<div style={{ marginLeft: "8%" }}>
				<h1>{props.Name}</h1>
				<h2>Name</h2>
			</div>
			<div style={FlexStyle}>
				<div>
					<h1>{props.Rank}</h1>
					<h2>Rank</h2>
				</div>
				<div>
					<span
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-between",
						}}
					>
						{props.Style.map(style => (
							<h1>{style + "  "}</h1>
						))}
					</span>
					<h2>Style</h2>
				</div>
			</div>
			<div style={FlexStyle}>
				<div>
					<h1>{props.Age}</h1>
					<h2>Age</h2>
				</div>
				<div>
					<h1>{props.Sex}</h1>
					<h2>Sex</h2>
				</div>
			</div>
		</div>
)

export default DisplayProfile
