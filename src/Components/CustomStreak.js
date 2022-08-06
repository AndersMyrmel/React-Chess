import React, {useState, useEffect} from 'react';
import { Game, move, status, moves, aiMove, getFen } from 'js-chess-engine';
import { Chessboard } from "react-chessboard";
import { Chess } from 'chess.js';
import '../Engine/lozza.js';

const FEN = '6k1/3qb1pp/4p3/ppp1P3/8/2PP1Q2/PP4PP/5RK1 w - - 0 1'

export function CustomStreak(){
  const [visualGame, setVisualGame] = useState(new Chess(FEN));
  const [game, setGame] = useState(new Game(FEN));

  function getLastDigits(str) {
    return str.split('bestmove')[1].trim();   
  }

  function getBestMove(fen){
    let lozza = new Worker('/lozza.js');
    lozza.postMessage('position fen ' + fen);
    lozza.postMessage('go depth 14');

    return new Promise((resolve) => {
      lozza.onmessage = function(e){
        if (e.data.includes('bestmove')){
          resolve(getLastDigits(e.data));
        }
      }
    })
  }

  async function handleClick () {
    let bestMove = await getBestMove(FEN);
    console.log(bestMove);
    return bestMove;
  };

  function safeGameMutate(modify) {
    setVisualGame((g) => {
      const update = { ...g };
      modify(update);
      return update;
    });
  }

  function onDrop(sourceSquare, targetSquare) {
    let visualMove = null;
    safeGameMutate((game) => {
      visualMove = game.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: 'q',
      });
    });
    if (visualMove === null) return false; // Illegal move

    game.move(sourceSquare, targetSquare);
    let computerMove = game.aiMove(3);
    let computerFrom = Object.keys(computerMove).toString().toLowerCase();
    let computerTo = Object.values(computerMove).toString().toLowerCase();
    setGame(game);
    safeGameMutate((visualGame) => {
      visualGame.move({from: computerFrom,
          to: computerTo});
    })
    return true;
  }

  if (visualGame.game_over() || visualGame.in_draw()) // Move this 
      return console.log('Game over'); // exit if the game is over

  return (
    <div><Chessboard position={visualGame.fen()} onPieceDrop={onDrop} />
    <button onClick={handleClick}>
    Next Move
      </button>
    </div>)
}