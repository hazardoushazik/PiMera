import React, { Component } from "react";
import Stream from "./Stream";

class Camera extends Component {	
	constructor(props) {
		super(props);
		this.myRef = React.createRef();		
	}
	render() {
		return (
			<div ref = {this.myRef}>
				<h2>Camera</h2>
				<Stream /> 
			</div>
		)
	}
	scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop);
}
export default Camera;