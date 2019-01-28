import React, { Component } from "react";

class Camera extends Component {
	render() {
		return (
			<div onLoad={createImageLayer()}>
				<h2>Camera</h2>
				<div id="webcam">
					<noscript>
						<img src ="http://raspberrypi:9000/?action=snapshot"
							 alt = "This is a stream from my pi camera"/>
					</noscript>
				</div>
			</div>
		);
	}
}

export default Camera;