import React, { Component } from "react";
import Stream from "./Stream";

class Camera extends Component {	
	render() {
		return (
			<div>
				<h2>Camera</h2>
				<Stream /> 
			</div>
		)
	}
}
export default Camera;