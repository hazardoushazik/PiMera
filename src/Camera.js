import React, { Component } from "react";

const streamSrc = "http://raspberrypi:9000/?action=snapshot";

function Stream(props) {
	return (
		<img 	src = {`${props.src}?${new Date().getTime()}`}
				alt = "This is a static stream from my pi camera"/>
	)
}

class Camera extends Component {
	render() {
		setInterval(tick, 10);
		return (
			<div>
				<h2>Camera</h2>
				<div>
					<Stream src = {streamSrc} />
					<img 	src = {`http://raspberrypi:9000/?action=snapshot?${new Date().getTime()}`}
  						 	alt = "This is a static stream from my pi camera"/>
				</div>
			</div>
		)
	}
}
export default Camera;