import { useState, useEffect } from 'react';

import { executeEvent } from '@/pages/ciclo-de-vida';

type CounterProps = {
	initialCount: number;
};

export const Counter: React.FC<CounterProps> = ({ initialCount }) => {
	const [count, setCount] = useState<number>(initialCount);

	useEffect(() => {
		executeEvent("onCounterMount", count);

		return () => {
			executeEvent("onCounterUnmount", count);
		};
	}, []);

	useEffect(() => {
		executeEvent("onCounterUpdate", count);
	});

	const handleIncrement = () => {
		setCount((prevCount) => prevCount + 1);
	};

	return (
		<div>
			<h2>Contador: {count}</h2>
			<button onClick={handleIncrement}>Incrementar +</button>
		</div>
	);
};
