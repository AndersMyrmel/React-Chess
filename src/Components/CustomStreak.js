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
	const [count, setCount] = useState(0); // Counter for traversing fen list
	const [currentPosition, setCurrentPosition] = useState(); // Current fen position
	const [rightClickedSquares, setRightClickedSquares] = useState({});
	const [optionSquares, setOptionSquares] = useState({}); // Show a piece's valid moves on hover

	// Update the chess game whenever fenlist or count changes
	useEffect(() => {
		validateFen(fenList[count]) // Check wheter the current FEN notation is valid
			? setGame(Chess(fenList[count]), setCurrentPosition(fenList[count]))
			: console.log('Invalid fen');
	}, [fenList, count]);

	const handleClick = async () => {
		setGame(Chess(fenList[count]));
		setCurrentPosition(fenList[count]);
	};

	// Make computer move
	const makeAMove = (move) => {
		const gameCopy = { ...game };
		const result = gameCopy.move(move);
		setGame(gameCopy);
		return result; // null if the move was illegal, the move object if the move was legal
	};

	// Update game state on piece move
	const safeGameMutate = (modify) => {
		setGame((g) => {
			const update = { ...g };
			modify(update);
			return update;
		});
	};

	// Move chess piece
	const onDrop = async (sourceSquare, targetSquare) => {
		let move = null;
		safeGameMutate((game) => {
			move = game.move({
				from: sourceSquare,
				to: targetSquare,
				promotion: 'q', // Auto promote to a queen for simplicity
			});
		});
		if (move === null) return false; // illegal move
		checkMove(move);
		return true;
	};

	// Check wheter the played move is the correct move
	const checkMove = async (move) => {
		if (game.game_over() || game.in_draw()) {
			// If game is currently in checkmate or stalemate current puzzle is completed
			count >= fenList.length - 1 // If count is larger then length of fenlist all puzzles are completed
				? console.log(' All puzzles finished, well done')
				: setCount(count + 1);
			return console.log('Puzzle Finished');
		}

		let [bestMoveFrom, bestMoveTo] = await getBestMove(currentPosition); // Get best move in current position from lozza engine

		if ((move.from === bestMoveFrom) & (move.to === bestMoveTo)) {
			// Compare best move to played move
			let [opponentFrom, opponentTo] = await getBestMove(game.fen());
			makeAMove({
				// Play opponents move
				from: opponentFrom,
				to: opponentTo,
				promotion: 'q', // Auto promote to a queen for simplicity
			});
			setCurrentPosition(game.fen());
		} else {
			setGame(Chess(fenList[count])); // Reset if played move did not equal the engine suggestion
			setCurrentPosition(fenList[count]);
		}
	};

	// Clear marked squares on left click
	const onSquareClick = () => {
		setRightClickedSquares({});
	};

	// Mark squares red on right click
	const onSquareRightClick = (square) => {
		const colour = '#cf6e53';
		setRightClickedSquares({
			...rightClickedSquares,
			[square]:
				rightClickedSquares[square] &&
				rightClickedSquares[square].backgroundColor === colour
					? undefined
					: { backgroundColor: colour },
		});
	};

	// Show valid moves on piece hover
	const onMouseOverSquare = (square) => {
		getMoveOptions(square);
	};

	// Only set squares to {} if not already set to {}
	const onMouseOutSquare = () => {
		if (Object.keys(optionSquares).length !== 0) setOptionSquares({});
	};

	// Get valid moves for piece on hover
	const getMoveOptions = (square) => {
		const moves = game.moves({
			square,
			verbose: true,
		});
		if (moves.length === 0) {
			return;
		}
		const newSquares = {};
		moves.map((move) => {
			newSquares[move.to] = {
				background:
					game.get(move.to) &&
					game.get(move.to).color !== game.get(square).color
						? 'radial-gradient(circle, rgba(0,0,0,.1) 85%, transparent 85%)'
						: 'radial-gradient(circle, rgba(0,0,0,.1) 25%, transparent 25%)',
				borderRadius: '50%',
			};
			return move;
		});
		newSquares[square] = {
			background: 'rgba(255, 255, 0, 0.4)',
		};
		setOptionSquares(newSquares);
	};

	return (
		<div className="background">
			<Header />
			<div className="board">
				<Chessboard
					position={game.fen()}
					boardWidth={600}
					animationDuration={200}
					onPieceDrop={onDrop}
					onSquareClick={onSquareClick}
					onSquareRightClick={onSquareRightClick}
					onMouseOverSquare={onMouseOverSquare}
					onMouseOutSquare={onMouseOutSquare}
					customBoardStyle={{
						borderRadius: '4px',
						boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)',
					}}
					customLightSquareStyle={{ backgroundColor: '#ebecd0' }}
					customDarkSquareStyle={{ backgroundColor: '#779756' }}
					customSquareStyles={{
						...optionSquares,
						...rightClickedSquares,
					}}
				/>
				<button onClick={handleClick}>Reset</button>
			</div>
		</div>
	);
};
