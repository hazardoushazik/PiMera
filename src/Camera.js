import React, { Component } from "react";

function tick() {
	const imageSrc = "http://raspberrypi:9000/?action=snapshot#";
	const imageHash = new Date().getTime();	
}

class Camera extends Component {
	render() {
		setInterval(tick, 1000);
		return (
			<div>
				<h2>Camera</h2>
				<div>
					{/* <noscript> */}
						<img src = {`${imageSrc}#${imageHash}`}
							 alt = "This is a static stream from my pi camera"/>
					{/* </noscript> */}
				</div>
			</div>
		);
	}
}

export default Camera;