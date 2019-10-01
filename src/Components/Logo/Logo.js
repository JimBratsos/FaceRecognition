import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png'; 

const Logo = () =>{
	return(
		<div className='ma4 mt0'>
			<Tilt className="Tilt br-2 shadow-2" options={{ max : 25 }} style={{ height: 105, width: 220 }} >
 				<div className="Tilt-inner"> 
 					<img className = "image" style={{paddingTop:'5px'}} alt="brain" src ={brain}/>
 				</div>
 				<div style={{fontStyle:'italic '}}>Icon made by <a style={{color:'red'}} href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a style={{color:'red'}} href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
			</Tilt>
		</div>
	)

}


export default Logo;