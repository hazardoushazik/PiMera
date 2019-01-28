import React, { Component } from "react";

const imageSrc;
const imageHash;

class Camera extends Component {
	render() {
		setInterval(tick, 1000);
		return (
			<div>
				<h2>Camera</h2>
				<div>
					{function tick() {
						imageSrc = "http://raspberrypi:9000/?action=snapshot#";
						imageHash = new Date().getTime();	
					}}
						<img src = {`${imageSrc}#${imageHash}`}
							 alt = "This is a static stream from my pi camera"/>
					{setInterval(tick,16)}
				</div>
			</div>
		);
	}
}

export default Camera;