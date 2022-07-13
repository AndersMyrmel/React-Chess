import { useState } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from 'chess.js'

const FEN = '2r3k1/R1P2pp1/1p1p3p/1r2p3/4P3/8/6PP/2R3K1 w - - 3 33'
const WMOVES = [
    {
    "color": "w",
    "from": "a7",
    "to": "b7",
    "flags": "n",
    "piece": "r",
    "san": "Rb7"
    },
]
const BMOVES = [
    {
        "color": "b",
        "from": "g8",
        "to": "h7",
        "flags": "n",
        "piece": "k",
        "san": "Kh7"
    },
]

export function Puzzle(){
    const [game, setGame] = useState(new Chess(FEN));

    function safeGameMutate(modify) {
        setGame((g) => {
          const update = { ...g };
          modify(update);
          return update;
        });
      }

    function checkMove(){
        
    }

    function onDrop(sourceSquare, targetSquare) {
        let move = null;
        safeGameMutate((game) => {
          move = game.move({
            from: sourceSquare,
            to: targetSquare,
          });
        });
        
        if (move === null) return false; // illegal move
        if (move.from === WMOVES[0].from && move.to === WMOVES[0].to){
            console.log('Correct move');
            setTimeout(safeGameMutate((game) => {
                game.move({from: BMOVES[0].from,
                    to: BMOVES[0].to});
              }), 200);
        }
        
        //setTimeout(makeRandomMove, 200);
        return true;
      }

    return <Chessboard position={game.fen()} onPieceDrop={onDrop} />;
}