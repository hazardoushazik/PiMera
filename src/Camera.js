import React, { Component } from "react";

class Camera extends Component {
	render() {
		var imageNr = 0; // Serial number of current image
		var finished = new Array(); // References to img objects which have finished downloading
		var paused = false;
		var previous_time = new Date();
		var fNi = 0, msAvg = 0, fpsAvg = 0, fcnt = 0, fN = 80, msa = [], wsize = 4;
		function createImageLayer() {
			var img = new Image();
			img.style.position = "absolute";
			img.style.zIndex = -1;
			img.onload = imageOnload;
			img.onclick = imageOnclick;
			img.width = 512;
			img.height = 384;
			img.src = "./?action=snapshot&n=" + (++imageNr);
			var webcam = document.getElementById("webcam");
			window.info = document.getElementById('info').firstChild;
			window.ravgFps = document.getElementById('ravgfps').firstChild;
			window.ravgMs = document.getElementById('ravgms').firstChild;
			webcam.insertBefore(img, webcam.firstChild);
			document.getElementById('fN').firstChild.nodeValue = fN;
		}
		// Two layers are always present (except at the very beginning), to avoid flicker
		function imageOnload() {
			this.style.zIndex = imageNr; // Image finished, bring to front!
			while (1 < finished.length) {
				var del = finished.shift(); // Delete old image(s) from document
				del.parentNode.removeChild(del);
			}
			finished.push(this);
			current_time = new Date();
			delta = current_time.getTime() - previous_time.getTime();
			fps   = (1000.0 / delta).toFixed(1);
			runningAvgs(delta);
			info.nodeValue = delta + " ms (" + fps + " fps)";
			ravgFps.nodeValue = fpsAvg.toFixed(1);
			ravgMs.nodeValue = msAvg.toFixed(0);
			previous_time = current_time;
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