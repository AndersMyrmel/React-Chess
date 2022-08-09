import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomeComponent } from './Components/HomeComponent.js';
import { CustomStreak } from './Components/CustomStreak.js';
import { InputFen } from './Components/InputFen.js';
import './Styles/App.css';

const App = () => {
	const [fenList, setFenList] = useState([]);

	return (
		<Routes>
			<Route path="/" element={<HomeComponent />} />
			<Route path="input-fen" element={<InputFen setFenList={setFenList} />} />
			<Route
				path="custom-streak"
				element={<CustomStreak fenList={fenList} />}
			/>
		</Routes>
	);
};

export default App;
