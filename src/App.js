import React from 'react';
import './App.css';
import {PlayRandomMove} from "./RandomGame"
import { Puzzle } from './Puzzle';
import { ChessEngine } from './Engine';

function App() {

  return (
    <div id='background'>
      <div id='board'>
        <ChessEngine/>
      </div>
    </div>
  );
}

export default App;
