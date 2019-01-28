import React, { Component } from "react";

const STREAM_SRC = "http://raspberrypi:9000/?action=snapshot";

class Stream extends Component {
	constructor(props) {
		super(props);
		this.state = {
			streamImage: null
		};
	}

	componentDidMount() {
		this.interval = setInterval(
			() => this.setState({
				streamImage: `${STREAM_SRC}?${new Date().getTime()}`,
			}),
			10
		);
	}
	
	componentWillUnmount(nextProps) {
		clearInterval(this.interval);
	}
	
	render() {
		return (
            <img 	src = {this.state.streamImage}
					alt = "This is a static stream from my pi camera"/>
		)
	}
}
export default Stream;