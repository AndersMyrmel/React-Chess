import { useState } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from 'chess.js'

const FEN = '2r3k1/1RP2pp1/1p1p3p/r3p3/4P3/8/6PP/2R3K1 w - - 5 34'

export function Puzzle(){
    return <Chessboard position={FEN} />;
}