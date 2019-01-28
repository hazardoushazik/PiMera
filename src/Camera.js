import React, { Component } from "react";

function CameraImage() {
	return (
		<img src = "http://raspberrypi:9000/?action=snapshot"
			 alt = "This is a stream from my pi camera"/>
	);
}
// setInterval(tick, 16); // approximate 30 FPS (1000 msec / 1 sec) * (1 sec / 60 frames)

class Camera extends Component {
	render() {
		return (
			<div>
				<h2>Camera</h2>
				<div>
					<noscript>
						<CameraImage />
					</noscript>
				</div>
			</div>
		);
	}
}

export default Camera;