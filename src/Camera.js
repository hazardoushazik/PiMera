import React, { Component } from "react";

var imageSrc = "http://raspberrypi:9000/?action=snapshot";
var imageHash = new Date().getTime();

function tick() {
	imageSrc = "http://raspberrypi:9000/?action=snapshot";
	imageHash = new Date().getTime();
}

class Camera extends Component {
	render() {
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

setInterval(tick,50);
export default Camera;