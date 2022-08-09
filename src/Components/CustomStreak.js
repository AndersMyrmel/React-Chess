import React, { useContext, useEffect, useState } from 'react';
import { Game } from 'js-chess-engine';
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';
import { Header } from '../Components/Header.js';
import { FenContext } from '../Context/FenContext.js';
import { getBestMove } from '../Services/getBestMove.js';
import { validateFen } from '../Services/fenValidation.js';
import '../Styles/App.css';
import '../Engine/lozza.js';

const FEN = [
	'6k1/3qb1pp/4p3/ppp1P3/8/2PP1Q2/PP4PP/5RK1 w - - 0 1',
	'8/6K1/1p1B1RB1/8/2Q5/2n1kP1N/3b4/4n3 w - - 0 1',
	'B7/K1B1p1Q1/5r2/7p/1P1kp1bR/3P3R/1P1NP3/2n5 w - - 0 1',
];

export const CustomStreak = () => {
	const [visualGame, setVisualGame] = useState(new Chess()); // Visual chessboard state
	const [game, setGame] = useState(new Game(FEN)); // Engine game state
	const [count, setCount] = useState(0); // Counter for traversing fenList
	const fenList = useContext(FenContext); // List of FEN positions from InputFen

	// Update the visual chessboard on first render and whenever fenlist or count changes
	useEffect(() => {
		validateFen(fenList[0][count]) // Check wheter the current FEN notation is valid
			? setVisualGame(Chess(fenList[0][count]))
			: alert('Invalid fen');
	}, [fenList, count]);

	const handleClick = async () => {
		let bestMove = await getBestMove(FEN);
		console.log(bestMove);
		count >= fenList[0].length - 1 ? setCount(0) : setCount(count + 1);
	};

	// Update visual chessboard
	const safeGameMutate = (modify) => {
		setVisualGame((g) => {
			const update = { ...g };
			modify(update);
			return update;
		});
	};

	const onDrop = (sourceSquare, targetSquare) => {
		let visualMove = null;
		safeGameMutate((game) => {
			visualMove = game.move({
				from: sourceSquare,
				to: targetSquare,
				promotion: 'q',
			});
		});
		if (visualMove === null) return false; // Check for illegal move

		game.move(sourceSquare, targetSquare);
		let computerMove = game.aiMove(3);
		let computerFrom = Object.keys(computerMove).toString().toLowerCase();
		let computerTo = Object.values(computerMove).toString().toLowerCase();
		setGame(game);
		safeGameMutate((visualGame) => {
			visualGame.move({ from: computerFrom, to: computerTo });
		});
		return true;
	};

	// Move this
	if (visualGame.game_over() || visualGame.in_draw())
		return console.log('Game over'); // exit if the game is over

	return (
		<div className="background">
			<Header />
			<div className="board">
				<Chessboard position={visualGame.fen()} onPieceDrop={onDrop} />
				<button onClick={handleClick}>Next Move</button>
			</div>
		</div>
	);
};
