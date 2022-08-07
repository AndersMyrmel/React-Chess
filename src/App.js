import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CustomStreak } from './Components/CustomStreak.js';
import { InputFen } from './Components/InputFen.js';
import { FenContext } from './Context/FenContext.js';
import './App.css';

const App = () => {
	const [value, setValue] = useState([]);
	return (
		<FenContext.Provider value={[value, setValue]}>
			<Routes>
				<Route path="/" element={<InputFen />} />
				<Route path="CustomStreak" element={<CustomStreak />} />
			</Routes>
		</FenContext.Provider>
	);
};

export default App;
