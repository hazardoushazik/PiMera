import React, { Component } from "react";

const streamSrc = "http://raspberrypi:9000/?action=snapshot";

function Stream(props) {
	const hash = new Date().toLocaleTimeString();
	return (
		<img 	src = {`${props.src}?${hash}`}
				alt = "This is a static stream from my pi camera"/>
	)
}

class Camera extends Component {
	render() {
		return (
			<div>
				<h2>Camera</h2>
				<div>
					<Stream src = {streamSrc} />
				</div>
			</div>
		)
	}
}
export default Camera;