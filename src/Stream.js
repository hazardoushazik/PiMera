import React, { Component } from "react";

import "./css/Stream.css";

const STREAM_SRC = "http://" + window.location.hostname + ":9000/?action=stream";
const LOGO_SRC = "images/logo.png";

class Stream extends Component {
	constructor(props) {
		super(props);
		this.state = {
			streamImage: `${STREAM_SRC}`,
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
		return (
			<div 
				className = "StreamContainer StreamImage" 
				style = {streamStyle}>
				<img 
					className = "StreamContained StreamImage" 
					src = {this.state.logoImage} 
					alt = 'logo'/>
			</div>
		)
	}
}
export default Stream;