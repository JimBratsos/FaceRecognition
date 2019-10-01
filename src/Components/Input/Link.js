import React from 'react';
import './Link.css';


const Link =({onInputChange, onButtonSubmit})=>{
	return(
		<div>
			<p className='f3'>
				{'Detecting faces in pics...'}
			</p>
			<div className='center'>
				<div className='form center pa4 br3 shadow5'>
					<input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
					<button style ={{'width':'auto'}} className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onButtonSubmit}>/Detect/</button>
				</div>
			</div>	
		</div>	
	)
}


export default Link;