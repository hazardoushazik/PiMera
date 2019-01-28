import React, { Component } from "react";

const STREAM_SRC = "http://raspberrypi:9000/?action=snapshot";

class Camera extends Component {
	constructor(props) {
		super(props);
		this.state = {
			streanImage: null
		};
	}

	componentDidMount() {
		this.interval = setInterval(
			() => this.setState({
				streanImage: `${STREAM_SRC}?${new Date().getTime()}`,
			}),
			10
		);
	}
	
	componentWillUnmount(nextProps) {
		clearInterval(this.interval);
	}
	
	render() {
		return (
			<div>
				<h2>Camera</h2>
				<div>
					<img 	src = {this.state.streanImage}
							alt = "This is a static stream from my pi camera"/>
				</div>
			</div>
		)
	}
}
export default Camera;