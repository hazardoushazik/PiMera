import React, { Component } from "react";
import { StillCamera, Codec } from "pi-camera-connect";
import * as fs from "fs";
// Take still image and save to disk

class Camera extends Component {
	render() {

	// 	// Take still image and save to disk
	// 	const streamCamera = new StreamCamera({
	// 		codec: Codec.MJPEG
	// 	});
		
	// 	streamCamera.startCapture().then(
	// 		streamCamera.takeImage().then(image => {
	// 			fs.writeFileSync("stream-image.jpg", image);
	// 		}),
	// 		streamCamera.stopCapture()
	// 	);
		const runApp = async () => {
	
			const stillCamera = new StillCamera();
		
			const image = await stillCamera.takeImage();
		
			fs.writeFileSync("still-image.jpg", image);
		};
		
		runApp();

		return (
			<div>
				<h2>Camera</h2>
				<div>
					<noscript>
						<img src ="still-image.jpg" 
							 alt = "This is a static stream from my pi camera"/>
					</noscript>
				</div>
			</div>
		);
	}
}

export default Camera;