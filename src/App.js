import './App.css';
import React, {Component} from "react";
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


const boardsContainer = {
  backgroundColor: '#202020',
  height: '100vh',
};
const boardStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};
