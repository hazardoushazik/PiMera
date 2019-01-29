import React, { Component } from "react";

const STREAM_SRC = "http://" + window.location.hostname + ":9000/?action=stream";
const LOGO_SRC = "images/logo.png";

class Stream extends Component {
	constructor(props) {
		super(props);
		this.state = {
			streamImage: "",
			logoImage: `${LOGO_SRC}`
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
			backgroundSize: '100% 100%'
		}
		return (
			<div style = {streamStyle}>
				<img src = {this.state.logoImage}/>
			</div>
		)
	}
}
export default Stream;