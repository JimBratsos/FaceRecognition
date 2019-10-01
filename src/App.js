import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav.js';
import Logo from './Components/Logo/Logo.js';
import Link from './Components/Input/Link.js';
import Rank from './Components/Ranking/Rank.js';
import Particles from 'react-particles-js';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition.js'
import Signin from './Components/Signin/Signin.js'
import Register from './Components/Register/Register.js'






const particlesOptions = {
	particles:{
		number:{
			value:100,
			density:{
				enable:true,
				value_area: 800
			}
		}
	}}


const initialState ={
	input:'',
	url:'',
	box:{},
	signin:'signedin',
	isSignedin:false,
	user:{
		id:'',
		name:'',
		pass:'',
		email:'',
		entries:0,
		joined:new Date()
	}
}




class App extends React.Component{

	constructor(){
		super();
		this.state =initialState;
			
	}


	loadUser=(data)=>{
		this.setState({user:{
			id:data.id,
			name:data.name,
			pass:data.pass,
			email:data.email,
			entries:data.entries,
			joined:data.joined
		}})
	}

	faceBox =(data) =>{
		const face = data.outputs[0].data.regions[0].region_info.bounding_box;

		const image = document.getElementById('imagegiven');
		const width = Number(image.width); 
		const height =Number(image.height)

		return{
			leftCol:face.left_col * width,
			topRow:face.top_row * height,
			rightCol:width -(face.right_col*width),
			bottomRow:height -(face.bottom_row* height)
		}
	}


	onSigninChange =(signin)=>{

		if (signin === 'signout'){
			this.setState(initialState)
		}else if(signin ==='home'){
			this.setState({isSignedin:true});

		}
		this.setState({signin:signin});
	}


	displayBox =(box) =>{

		this.setState({box:box});
	}

	onInputChange =(event)=>{

		this.setState({input:event.target.value});
	}

	onButtonSubmit =(event)=>{

		this.setState({url:this.state.input});
			fetch('http://localhost:3001/imageurl',{
					method:'post',
					headers:{'Content-Type':'application/json'},
					body: JSON.stringify({
						input:this.state.input,
					})
				})
		.then(response => response.json())
		.then(response =>{
			if(response){
				fetch('http://localhost:3001/image',{
					method:'put',
					headers:{'Content-Type':'application/json'},
					body: JSON.stringify({
						id:this.state.user.id,
					})
				})
				.then(response=>response.json())
				.then(count=>{
					this.setState(Object.assign(this.state.user, {entries:count}))
				})
			}
			this.displayBox(this.faceBox(response))
		})
    	
    	.catch(err =>console.log(err));

	}

	render(){
		const {isSignedin, url, box, signin} = this.state;
		return(
			<div className = "App">

				{signin === 'home'

					?<div className ='choice1'>
						<Nav isSignedin={isSignedin} onSigninChange={this.onSigninChange}/>
						<Logo/>
						<Rank name={this.state.user.name} entries={this.state.user.entries}/>
						<Link onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
						<Particles className='Particles' params ={particlesOptions} />
						<FaceRecognition box={box} url={url}/>
					</div>

					:(signin ==='signedin'

					?<div className = 'choice2'>
						<Nav onSigninChange={this.onSigninChange}/>
						<Signin loadUser={this.loadUser} onSigninChange={this.onSigninChange}/>
						<Particles className='Particles' params ={particlesOptions} />
					</div>

					:<div className = 'choice3'>
						<Nav onSigninChange={this.onSigninChange}/>
						<Register loadUser={this.loadUser} onSigninChange={this.onSigninChange}/>
						<Particles className='Particles' params ={particlesOptions} />
					</div>

					)


				}
			</div>
		);

	}


}

export default App;