import React, { Component } from "react";

const STREAM_SRC = "http://" + window.location.hostname + ":9000/?action=stream";


const imgStyle = {
	transform: 'rotate(180deg)',
	backgroundImage: '' + {STREAM_SRC} + ')'
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
			50
		);
	}
	
	streamStyle = {
		color: 'blue',
		backgroundImage: 'url(' + imgUrl + ')',
	};
	
	componentWillUnmount(nextProps) {
		clearInterval(this.interval);
	}
	
	render() {
		return (
			<div style = {this.streamStyle}></div>
            <img 	src = {this.state.streamImage}
                    style = {imgStyle}
					alt = "This is a stream from my pi camera"/>
		)
	}
}
export default Stream;