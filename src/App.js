import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './features/counter/counterSlice';

function App() {
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<div style={{ textAlign: 'center', paddingTop: '2rem' }}>
			<h1>Count: {count}</h1>
			<button onClick={() => dispatch(increment())}>Increment</button>
			<button onClick={() => dispatch(decrement())} style={{ marginLeft: '1rem' }}>
				Decrement
			</button>
			<button
				onClick={() => dispatch(incrementByAmount(5))}
				style={{ marginLeft: '1rem' }}
			>
				Add 5
			</button>
		</div>
	);
}

export default App;
