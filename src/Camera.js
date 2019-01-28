import React, { Component } from "react";

class Camera extends Component {
	render() {
		const imageSrc = "http://raspberrypi:9000/?action=snapshot";
		const imageHash = new Date().getTime();
		function tick() {
			imageSrc = "http://raspberrypi:9000/?action=snapshot";
			imageHash = new Date().getTime();
		}
		setInterval(tick,50);
		return (
			<div>
				<h2>Camera</h2>
				<div>
					<img 	src = {`${imageSrc}#${imageHash}`}
  						 	alt = "This is a static stream from my pi camera"/>
				</div>
			</div>
		)
	}
}

export default Camera;