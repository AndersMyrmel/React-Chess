import React, { useMemo, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CustomStreak } from './Components/CustomStreak.js';
import { InputFen } from './Components/InputFen.js';
import { FenContext } from './Context/FenContext.js';
import './App.css';

const App = () => {
	const [fen, setFen] = useState([]);
	const value = useMemo(() => [fen, setFen], [fen, setFen]);

	return (
		<FenContext.Provider value={value}>
			<Routes>
				<Route path="/" element={<InputFen />} />
				<Route path="CustomStreak" element={<CustomStreak />} />
			</Routes>
		</FenContext.Provider>
	);
};

export default App;
