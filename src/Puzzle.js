import { useState } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from 'chess.js'

const FEN = '6k1/3qb1pp/4p3/ppp1P3/8/2PP1Q2/PP4PP/5RK1 w - - 0 1' // FEN notation for the starting board
const WMOVES = [
    {
    "color": "w",
    "from": "f3",
    "to": "f7",
    },
    {
      "color": "w",
      "from": "f7",
      "to": "f8",
    },
    {
      "color": "w",
      "from": "f1",
      "to": "f8",
    },
]
const BMOVES = [
    {
        "color": "b",
        "from": "g8",
        "to": "h8",
    },
    {
      "color": "b",
      "from": "e7",
      "to": "f8",
    },
]

export function Puzzle(){
    const [game, setGame] = useState(new Chess(FEN)); // Game state
    const [count, setCount] = useState(0); // Number of right moves played

    // Function to update game state
    function safeGameMutate(modify) {
        setGame((g) => {
          const update = { ...g };
          modify(update);
          return update;
        });
      }

    // Checks wheter the played move is the correct move
    function checkMove(game, move, count){
      if (move.from === WMOVES[count].from && move.to === WMOVES[count].to){
        correctMove(game, count); // If the move is correct call the function to play the next computer move
      }
      else{
        incorrectMove();
      }
    }

    // Make next computer move upon correct player move
    function correctMove(game, count){
      if (game.game_over() || game.in_draw()){
        return console.log('Puzzle completed'); // Exit if the game is over
      }
      safeGameMutate((game) => {
        game.move({from: BMOVES[count].from,
            to: BMOVES[count].to});
      })
      console.log('Correct move');
      setCount(count+1);
    }

    // Player makes incorrect move
    function incorrectMove(){
      console.log('Incorrect move, try again');
      setGame(Chess(FEN)); // Reset board if wrong move is played
      setCount(0);
    }

    // Function for handling piece movement
    function onDrop(sourceSquare, targetSquare) {
        let move = null;
        safeGameMutate((game) => {
          move = game.move({
            from: sourceSquare,
            to: targetSquare,
          });
        });
        if (move === null) return false; // illegal move
        checkMove(game, move, count);
        return true;
      }

    return <Chessboard position={game.fen()} onPieceDrop={onDrop} />;
}
