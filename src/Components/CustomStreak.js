import React, { useEffect, useState } from 'react';
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';
import { Header } from '../Components/Header.js';
import { getBestMove } from '../Services/getBestMove.js';
import { validateFen } from '../Services/fenValidation.js';
import '../Styles/App.css';
import '../Engine/lozza.js';

const FEN = [
	'6k1/3qb1pp/4p3/ppp1P3/8/2PP1Q2/PP4PP/5RK1 w - - 0 1',
	'8/6K1/1p1B1RB1/8/2Q5/2n1kP1N/3b4/4n3 w - - 0 1',
	'B7/K1B1p1Q1/5r2/7p/1P1kp1bR/3P3R/1P1NP3/2n5 w - - 0 1',
];

export const CustomStreak = ({ fenList }) => {
	const [game, setGame] = useState(new Chess());
	const [count, setCount] = useState(0); // Counter for traversing fenList

	// Update the visual chessboard on first render and whenever fenlist or count changes
	useEffect(() => {
		validateFen(fenList[count]) // Check wheter the current FEN notation is valid
			? setGame(Chess(fenList[count]))
			: console.log('Invalid fen');
	}, [fenList, count]);

	const handleClick = async () => {
		let bestMove = await getBestMove(fenList[count]);
		console.log(bestMove);
		//count >= fenList.length - 1 ? setCount(0) : setCount(count + 1);

		const move = makeAMove({
			from: bestMove[0],
			to: bestMove[1],
			promotion: 'q', // always promote to a queen for example simplicity
		});
	};

	function makeAMove(move) {
		const gameCopy = { ...game };
		const result = gameCopy.move(move);
		setGame(gameCopy);
		return result; // null if the move was illegal, the move object if the move was legal
	}

	// Update visual chessboard
	const safeGameMutate = (modify) => {
		setGame((g) => {
			const update = { ...g };
			modify(update);
			return update;
		});
	};

	const onDrop = (sourceSquare, targetSquare) => {
		let move = null;
		safeGameMutate((game) => {
			move = game.move({
				from: sourceSquare,
				to: targetSquare,
				promotion: 'q', // always promote to a queen for example simplicity
			});
		});
		if (move === null) return false; // illegal move

		return true;
	};

	return (
		<div className="background">
			<Header />
			<div className="board">
				<Chessboard position={game.fen()} onPieceDrop={onDrop} />
				<button onClick={handleClick}>Next Move</button>
			</div>
		</div>
	);
};
