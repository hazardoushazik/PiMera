import React, { Component } from "react";

const CAM_SRC = "http://" + window.location.hostname + ":9000/?action=stream";
const LOGO_SRC = "images/logo.png";

class Camera extends Component {
	constructor(props) {
		super(props);
		this.state = {
			camImage: `${CAM_SRC}`,
			logoImage: `${LOGO_SRC}`
		};
	}

	componentDidMount() {
		this.interval = setInterval(
			() => this.setState({
				camImage: `${CAM_SRC}`,
			}),
			100
		);
	}
		
	componentWillUnmount(nextProps) {
		clearInterval(this.interval);
	}
	
	render() {
		var camStyle = {
			backgroundImage: `url(${this.state.camImage})`
		}
		return (
			<div 
				className = "CameraContainer CameraImage" 
				style = {camStyle}>
				<img  className = "CameraContained CameraImage rounded" 
							src = {this.state.logoImage} 
							alt = 'logo'/>
			</div>
		)
	}
}
export default Camera;