import React, {useState} from 'react';
import { Game, move, status, moves, aiMove, getFen } from 'js-chess-engine';
import { Chessboard } from "react-chessboard";
import { Chess } from 'chess.js';

export function ChessEngine(){
  const [visualGame, setVisualGame] = useState(new Chess());
  const [game, setGame] = useState(new Game());

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

  return <Chessboard position={visualGame.fen()} onPieceDrop={onDrop} />;
}