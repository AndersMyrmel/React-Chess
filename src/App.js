import React from 'react';
import './App.css';
import { PlayRandomMove } from './Components/RandomGame.js';
import { Puzzle } from './Components/Puzzle.js';
import { CustomStreak } from './Components/CustomStreak.js';
import { InputFen } from './Components/InputFen.js';

const App = () => {
	return (
		<div id="background">
			<div id="board">
				<InputFen />
			</div>
		</div>
	);
};

export default App;
