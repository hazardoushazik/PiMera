import React, { Component } from "react";

const STREAM_SRC = "http://raspberrypi:9000/?action=snapshot";

class Stream extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentImage: null,
			nextImage: null
		};
	}

	componentDidMount() {
		this.interval = setInterval(
			() => this.setState({
				nextImage: `${STREAM_SRC}?${new Date().getTime()}`,
                currentImage: nextImage,
			}),
			20
		);
	}
	
	componentWillUnmount(nextProps) {
		clearInterval(this.interval);
	}
	
	render() {
		return (
            <img 	src = {this.state.currentImage}
					alt = "This is a static stream from my pi camera"/>
		)
	}
}
export default Stream;