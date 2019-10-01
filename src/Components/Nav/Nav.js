import React from 'react';

const Nav = ({onSigninChange,isSignedin})=>{
		if (isSignedin){
			return(
				<nav style={{display:'flex', justifyContent:'flex-end'}}>
					<p  onClick={() => onSigninChange('signedin')} className='f3 link dim black underline pa3 pointer'> Sign out </p>
				</nav>
			);

		}else{
			return(
				<nav style={{display:'flex', justifyContent:'flex-end'}}>
					<p  onClick={() => onSigninChange('signedin')} className='f3 link dim black underline pa3 pointer'> Sign in </p>
					<p  onClick={() => onSigninChange('register')} className='f3 link dim black underline pa3 pointer'> Register </p>
				</nav>
			);	
		}
}

export default Nav;