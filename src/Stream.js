import React, { Component } from "react";

const STREAM_SRC = "http://" + window.location.hostname + ":9000/?action=stream";

var streamStyle = {
	transform: 'rotate(180deg)',
	backgroundImage: 'url(' + `${this.state.streamImage}` + ')'
}

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
				streamImage: `${STREAM_SRC}`,
			}),
			10
		);
	}
	
	componentWillUnmount(nextProps) {
		clearInterval(this.interval);
	}
	
	render() {
		return (
			<div style = {streamStyle}></div>
		)
	}
}
export default Stream;