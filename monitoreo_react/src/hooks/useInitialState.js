import { useState, useEffect } from 'react';

const useInitialState = (API) => {
	const [ graphs, setGraphs ] = useState([]);
	useEffect(() => {
		fetch(API)
			.then(response => response.json())
			.then(data => setGraphs(data));
	}, []);
	return graphs;
}

export default useInitialState;