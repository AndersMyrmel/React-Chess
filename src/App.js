import React, { useMemo, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomeComponent } from './Components/HomeComponent.js';
import { CustomStreak } from './Components/CustomStreak.js';
import { InputFen } from './Components/InputFen.js';
import { FenContext } from './Context/FenContext.js';
import './Styles/App.css';

const App = () => {
	const [fen, setFen] = useState([]);
	const value = useMemo(() => [fen, setFen], [fen, setFen]);

	return (
		<FenContext.Provider value={value}>
			<Routes>
				<Route path="/" element={<HomeComponent />} />
				<Route path="input-fen" element={<InputFen />} />
				<Route path="custom-streak" element={<CustomStreak />} />
			</Routes>
		</FenContext.Provider>
	);
};

export default App;
