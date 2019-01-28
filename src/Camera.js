import React, { Component } from "react";
// Take still image and save to disk

class Camera extends Component {
	render() {
		var socket = io();
		socket.on('liveStream', function(url) {
			$('#stream').attr('src', url);
			$('.start').hide();
		});
		
		function startStream() {
			socket.emit('start-stream');
			$('.start').hide();
		}
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