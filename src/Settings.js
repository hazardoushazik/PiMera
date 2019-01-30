import React, { Component } from "react";
import Terminal from 'react-bash';

const history = [
    { value: 'Type `help` to begin' },
];


class Settings extends Component {
	constructor(props){
		super(props);
		this.state={
			commandData:''
		}
	}
	render() {
		const extensions = {
			sudo: {
				exec: ({structure, history, cwd}) => {
					return {structure, cwd,
						history: history.concat({value: 'Nice try...'}),
					};
				},
			},
		}
		return (
			<div className="parentContainer">
				<h4>Run docker administration commands here</h4>
				<div style={{flex:1}}>
                  	<Terminal history={history} structure={structure} extensions={extensions} prefix={"pi@raspberrypi"}/>  
				</div>
				<div>
					{this.state.commandData}
				</div> 
			</div>
		);
	}
}

export default Settings;