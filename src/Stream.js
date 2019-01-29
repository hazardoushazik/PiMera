import React, { Component } from "react";

const STREAM_SRC = "http://" + window.location.hostname + ":9000/?action=stream";

class Stream extends Component {
	constructor(props) {
		super(props);
		this.state = {
			streamImage: ""
		};
	}

	componentDidMount() {
		this.interval = setInterval(
			() => this.setState({
				streamImage: `${STREAM_SRC}`,
			}),
			60
		);
	}
		
	componentWillUnmount(nextProps) {
		clearInterval(this.interval);
	}
	
	render() {
		var streamStyle = {
			transform: 'rotate(180deg)',
			backgroundImage: `url(${this.state.streamImage})`,
			height: '100vh',
			width: '100vw',
		}
		return (
			<div style = {streamStyle}></div>
		)
	}
}
export default Stream;