import React, { Component } from "react";

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fs = require('fs');
var path = require('path');

var spawn = require('child_process').spawn;
var proc;

app.use('/', express.static(path.join(__dirname, 'stream')));

app.get('/', function(req, res) {
	res.sendFile(__dirname);
});

var sockets = {};

io.on('connection', function(socket) {
	sockets[socket.id] = socket;
	console.log("Total clients connected : ", Object.keys(sockets).length);

	socket.on('disconnect', function() {
		delete sockets[socket.id];

		// no more sockets, kill the stream
		if (Object.keys(sockets).length == 0) {
			app.set('watchingFile', false);
			if (proc) proc.kill();
				fs.unwatchFile('./stream/image_stream.jpg');
		}
	});

	socket.on('start-stream', function() {
			startStreaming(io);
	});
});

http.listen(3000, function() {
	console.log('listening on *:3000');
});

function stopStreaming() {
	if (Object.keys(sockets).length == 0) {
		app.set('watchingFile', false);
		if (proc) proc.kill();
		fs.unwatchFile('./stream/image_stream.jpg');
	}
}

function startStreaming(io) {
	if (app.get('watchingFile')) {
		io.sockets.emit('liveStream', 'image_stream.jpg?_t=' + (Math.random() * 100000));
		return;
	}

	var args = ["-w", "640", "-h", "480", "-o", "./stream/image_stream.jpg", "-t", "999999999", "-tl", "100"];
	proc = spawn('raspistill', args);

	console.log('Watching for changes...');

	app.set('watchingFile', true);

	fs.watchFile('./stream/image_stream.jpg', function(current, previous) {
		io.sockets.emit('liveStream', 'image_stream.jpg?_t=' + (Math.random() * 100000));
	})
}

class Camera extends Component {
	render() {
		return (
			<div>
				<h2>Camera</h2>
				<div>
					<noscript>
						<img src ="http://192.168.2.36:9000/?action=snapshot" 
							 alt = "This is a static stream from my pi camera"/>
					</noscript>
				</div>
			</div>
		);
	}
}

export default Camera;