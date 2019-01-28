import React, { Component } from "react";

class Camera extends Component {
	render() {
		return (
			<div>
				<h2>Camera</h2>
				<div>
					{/* <noscript> */}
						<img src ="./?action=stream"
							 alt = "This is a stream from my pi camera"/>
					{/* </noscript> */}
				</div>
			</div>
		);
	}
}

export default Camera;