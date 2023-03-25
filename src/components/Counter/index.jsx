import React, { useState } from 'react';

import './style.css';

const Counter = ( { maxCount = 10 } ) => {
	const [ count, setCount ] = useState( 0 );

	const rest = () => setCount( count - 1)
	const sum = () => setCount( count + 1)

	return (
		<div className='counter'>
			<button onClick={ () => rest() } disabled={ count === 0 } >-</button>
			<span>{ count }</span>
			<button onClick={ () => sum() } disabled={ count >= maxCount }>+</button>
		</div>
	);
}

export { Counter };
