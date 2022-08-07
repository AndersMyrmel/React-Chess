import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { PlayRandomMove } from './Components/RandomGame.js';
import { Puzzle } from './Components/Puzzle.js';
import { CustomStreak } from './Components/CustomStreak.js';
import { InputFen } from './Components/InputFen.js';

const App = () => {
	return (
		<div id="background">
			<div id="board">
				<Routes>
					<Route path="/" element={<InputFen />} />
					<Route path="CustomStreak" element={<CustomStreak />} />
				</Routes>
			</div>
		</div>
	);
};

export default App;
