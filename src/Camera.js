import React, { Component } from "react";

class Camera extends Component {
	render() {
		return (
			<div>
				<h2>Camera</h2>
				<div>
					<noscript><img src="http://localhost:9000/?action=snapshot" /></noscript>
				</div>
			</div>
		);
	}
}

export default Camera;