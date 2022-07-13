import './App.css';
import { useState } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from 'chess.js'
import {PlayRandomMove} from "./RandomGame"

function App() {

  return (
    <div id='background'>
      <div id='board'>
        <PlayRandomMove/>
      </div>
    </div>
  );
}

export default App;
