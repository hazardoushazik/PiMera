import React, { Component } from "react";
import { StreamCamera, Codec } from "pi-camera-connect";
import * as fs from "fs";

// Take still image and save to disk
const streamCamera = new StreamCamera({
	codec: Codec.MJPEG
});

await streamCamera.startCapture();
streamCamera.takeImage().then(image => {
	fs.writeFileSync("stream-image.jpg", image);
});
await streamCamera.stopCapture();

class Camera extends Component {
	render() {
		return (
			<div>
				<h2>Camera</h2>
				<div>
					<noscript>
						<img src ="stream-image.jpg" 
							 alt = "This is a static stream from my pi camera"/>
					</noscript>
				</div>
			</div>
		);
	}
}

export default Camera;