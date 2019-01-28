import React, { Component } from "react";

function tick() {
	const imageSrc = "http://raspberrypi:9000/?action=snapshot#";
	const imageHash = new Date().getTime();	
}

setInterval(tick, 1000);
class Camera extends Component {
	render() {
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