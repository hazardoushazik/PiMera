import React, { Component } from "react";

class Camera extends Component {
	render() {
		return (
			<div>
				<h2>Camera</h2>
				<div>
					{/* <noscript> */}
						<img src ="http://localhost:9000/?action=snapshot" 
							 alt = "This is a static stream from my pi camera"/>
					{/* </noscript> */}
				</div>
			</div>
		);
	}
}

export default Camera;