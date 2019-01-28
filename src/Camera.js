import React, { Component } from "react";
import { StreamCamera, Codec } from "pi-camera-connect";
import * as fs from "fs";

// Take still image and save to disk
const runApp = async () => {
    
    const streamCamera = new StreamCamera({
        codec: Codec.MJPEG
    });

    await streamCamera.startCapture();

    const image = await streamCamera.takeImage();

    // Process image...
    fs.writeFileSync("stream-image.jpg", image);

    await streamCamera.stopCapture();
};

runApp();


class Camera extends Component {
	render() {
		return (
			<div>
				<h2>Camera</h2>
				<div>
					<noscript>
						<img src ="http://localhost:9000/?action=snapshot" 
							 alt = "This is a static stream from my pi camera"/>
					</noscript>
				</div>
			</div>
		);
	}
}

export default Camera;