import React from 'react';
import './App.css';
import {PlayRandomMove} from "./Components/RandomGame.js"
import { Puzzle } from './Components/Puzzle.js';
import { CustomStreak } from './Components/CustomStreak.js';


function App() {
  return (
    <div id='background'>
      <div id='board'>
        <CustomStreak/>
      </div>
    </div>
  );
}

export default App;
