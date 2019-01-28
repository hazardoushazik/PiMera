import React, { Component } from "react";

class Camera extends Component {
	render() {
		var imageNr = 0; // Serial number of current image
		var finished = new Array(); // References to img objects which have finished downloading
		var paused = false;
		function createImageLayer() {
			var img = new Image();
			img.style.position = "absolute";
			img.style.zIndex = -1;
			img.onload = imageOnload;
			img.onclick = imageOnclick;
			img.src = "./?action=snapshot&n=" + (++imageNr);
			var webcam = document.getElementById("webcam");
			webcam.insertBefore(img, webcam.firstChild);
		}
		
		// Two layers are always present (except at the very beginning), to avoid flicker
		function imageOnload() {
			this.style.zIndex = imageNr; // Image finished, bring to front!
			while (1 < finished.length) {
				var del = finished.shift(); // Delete old image(s) from document
				del.parentNode.removeChild(del);
			}
			finished.push(this);
			if (!paused) createImageLayer();
		}
		function imageOnclick() { // Clicking on the image will pause the stream
			paused = !paused;
			if (!paused) createImageLayer();
		}
		return (
			<div onload="createImageLayer();">
				<h2>Camera</h2>
				<div id="webcam">
					<noscript>
						<img src ="http://raspberrypi:9000/?action=snapshot"
							 alt = "This is a stream from my pi camera"/>
					</noscript>
				</div>
			</div>
		);
	}
}

export default Camera;