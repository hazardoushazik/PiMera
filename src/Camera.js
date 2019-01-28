import React, { Component } from "react";
import Main from "./Main";
// Take still image and save to disk
var socket = io();
socket.on('liveStream', function(url) {
	$('#stream').attr('src', url);
	$('.start').hide();
});

function startStream() {
	socket.emit('start-stream');
	$('.start').hide();
}

class Camera extends Component {
	render() {
		return (
			<div>
				<h2>Camera</h2>
				<div class="row" onload={startStream()}>
					<img src="" id="stream"/>
				</div>
			</div>
		);
	}
}

export default Camera;