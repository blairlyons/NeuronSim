"use strict";
import React from 'react';
import ReactDOM from 'react-dom';



class Main extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			graphVisible: false
		}

		this.sendActionPotential = this.sendActionPotential.bind(this);
		this.clearScene = this.clearScene.bind(this);
		this.setRestingPotential = this.setRestingPotential.bind(this);
	}

	componentDidMount(){
		window.showGraph = () => this.setState({ graphVisible: true });
	}
	

	graph(){
		// let style ={
		// 	width: "350px",
		// 	height: "200px",
		// 	position: "absolute",
		// 	right: "18%",
		// 	bottom: "18%",
		// 	backgroundColor: "rgba(255, 255, 255, 0.5)"
		// }
		if(this.state.graphVisible){
			return (
				<div id="graph" >
					
				</div>
			)

		}
		else{
			return "";
		}

	}

	setRestingPotential(){
		this.clearScene();

		SendMessage('Networking', 'ReceiveAction', JSON.stringify({
			"environment": "all",
			"actionType": "AddElement",
			"elementType": "NaKATPase",
			"n": "3"
		}));
		SendMessage('Networking', 'ReceiveAction', JSON.stringify({
			"environment": "all",
			"actionType": "AddElement",
			"elementType": "KChannel",
			"n": "2"
		}));
		SendMessage('Networking', 'ReceiveAction', JSON.stringify({
			"environment": "all",
			"actionType": "AddElement",
			"elementType": "NaVGChannel",
			"n": "3"
		}));
		SendMessage('Networking', 'ReceiveAction', JSON.stringify({
			"environment": "all",
			"actionType": "AddElement",
			"elementType": "KVGChannel",
			"n": "2"
		}));
		SendMessage('Networking', 'ReceiveAction', JSON.stringify({
			"environment": "all",
			"actionType": "AddElement",
			"elementType": "ATP",
			"n": "20"
		}));
	
	}

	sendActionPotential(){
		console.log("Trying to send action potential");
		

		SendMessage('Networking', 'ReceiveAction', JSON.stringify({
			"environment": "all",
			"actionType": "ReachThreshold"
		}));
	}

	clearScene(){
		SendMessage('Networking', 'ReceiveAction', JSON.stringify({
			"environment": "all",
			"actionType": "ClearScene"
		}));
	}

	
	buttons(){
		return(
			<div className="buttons">
				
				<button onClick={this.setRestingPotential} >Set resting potential</button>
				<button onClick={this.sendActionPotential} >Stimulate neuron</button>
				<button onClick={this.clearScene} >Reset simulation</button>
			</div>
		)
	}


	render(){
		return(
			<div >
				<div id="logo">
					<a href="http://dynamoid.com"><img src="logo.png" alt="Dynamoid logo" /></a>
				</div>	
				{this.buttons()}
				{this.graph()}
			</div>
			
		)
	}
}




ReactDOM.render(
	<Main />,
	document.querySelector('main')
);


