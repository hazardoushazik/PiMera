import React, { Component } from "react";

var imageSrc = "http://raspberrypi:9000/?action=snapshot";
var imageHash = new Date().getTime();

function tick() {
	imageSrc = "http://raspberrypi:9000/?action=snapshot";
	imageHash = new Date().getTime();
}

class Camera extends Component {
	render() {
		setInterval(tick, 10);
		return (
			<div>
				<h2>Camera</h2>
				<div>
					<img 	src = {`http://raspberrypi:9000/?action=snapshot?${new Date().getTime()}`}
  						 	alt = "This is a static stream from my pi camera"/>
				</div>
			</div>
		)
	}
}
export default Camera;