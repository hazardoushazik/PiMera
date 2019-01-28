import React, { Component } from "react";

const STREAM_SRC = "http://raspberrypi:9000/?action=snapshot";
const STREAM_REFRESH_RATE = 200;

class Stream extends Component {
	constructor(props) {
		super(props);
        this.loadImage = () => {
            const component = this;
      
            const img = new Image();
            img.crossOrigin = "Anonymous";
            img.onload = function () {
                var canvas = document.createElement("canvas");
                canvas.width = this.width;
                canvas.height = this.height;
        
                var ctx = canvas.getContext("2d");
                ctx.drawImage(this, 0, 0);
        
                var dataURL = canvas.toDataURL("image/png");
                component.setState({liveImage: dataURL});
            };
        
            img.src = `${STREAM_SRC}?${new Date().getTime()}`;
            this.setState({ loadingImage: img });
        }
      
        this.state = {
            loadingImage: null,
            liveImage: null
        };
    }
      
    componentDidMount() {
        this.loadImage();
        this.interval = setInterval(this.loadImage, STREAM_REFRESH_RATE);
    }
	
	componentWillUnmount() {
		clearInterval(this.interval);
	}
	
	render() {
		return (
            <img 	src = {this.state.liveImage}
					alt = "This is a static stream from my pi camera"/>
		)
	}
}
export default Stream;