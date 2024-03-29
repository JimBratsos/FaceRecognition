import React from 'react';

class Register extends React.Component{
	constructor(props){
		super(props);
		this.state={
			email:'',
			pass:'',
			name:'',
		}

	}

	onNameChange=(event)=>{
		this.setState({name:event.target.value});
	}


	onEmailChange=(event)=>{
		this.setState({email:event.target.value});
	}

	onPassChange=(event) =>{
		this.setState({pass:event.target.value});
	}

	onSubmit=()=>{
		fetch('http://localhost:3001/register',{
			method:'post',
			headers:{'Content-Type':'application/json'},
			body: JSON.stringify({
				email:this.state.email,
				pass:this.state.pass,
				name:this.state.name
			})
		})
		.then(response=>response.json())
		.then(user =>{
			if (user.id){
				this.props.loadUser(user)
				this.props.onSigninChange('home');
			}
		})
		
	}

	render() {

		return(
			<article id='form' className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-1 mw6 shadow center mt0" style={{'marginTop':'200px'}}>	
				<main className="pa4 black-80">
				  <div className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f4 fw6 ph0 mh0">Register</legend>
				      
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
				        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        type="text" name="name"  
				        id="name"
				        onChange={this.onNameChange}
				        />
				        
				      </div>

				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input 
				        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        type="email" name="email-address"  
				        id="email-address"
				        onChange={this.onEmailChange}
				        />
				        
				      </div>

				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        type="password" 
				        name="password"  
				        id="password"
				        onChange={this.onPassChange}
				        />
				        
				      </div>

				    </fieldset>

				    <div className="">
				      <input onClick={this.onSubmit} 
				      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
				      type="submit" 
				      value="Register"/>
				    </div>
				   
				  </div>
				</main>
			</article>
		);	
	}
}

export default Register;