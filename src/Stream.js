import React, { Component } from "react";

import "./css/Stream.css";

const STREAM_SRC = "http://" + window.location.hostname + ":9000/?action=stream";
const LOGO_SRC = "images/logo.png";

class Stream extends Component {
	constructor(props) {
		super(props);
		this.state = {
			streamImage: "",
			logoImage: `${LOGO_SRC}`
		};
	}

	componentDidMount() {
		this.interval = setInterval(
			() => this.setState({
				streamImage: `${STREAM_SRC}`,
			}),
			60
		);
	}
		
	componentWillUnmount(nextProps) {
		clearInterval(this.interval);
	}
	
	render() {
		var streamStyle = {
			backgroundImage: `url(${this.state.streamImage})`
		}
		var logoStyle = {
			backgroundImage: `url(${this.state.logoImage})`
		}
		return (
			<div 
				className = "StreamContainer StreamImage" 
				style = {streamStyle}>
				<div 
					className = "StreamContained StreamImage"
					style = {logoStyle}></div>
			</div>
		)
	}
}
export default Stream;