import React, { useEffect, useState } from 'react';
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';
import { getGameById } from '../Services/getGameById';
import { getPgnArray } from '../Services/getPgnArray';
import { Header } from '../Components/Header.js';
import { Guess } from './Guess';
import games from '../Database/Games.txt';
import '../Styles/GuessTheElo.css';

export const GuessTheElo = () => {
	const [listOfGames, setListOfGames] = useState();
	const [game, setGame] = useState(new Chess());
	const [moves, setMoves] = useState([]);
	const [count, setCount] = useState(0);

	useEffect(() => {
		fetch(games)
			.then((r) => r.text())
			.then((text) => {
				setListOfGames(text);
			});
	});

	const makeAMove = (move) => {
		const gameCopy = { ...game };
		const result = gameCopy.move(move);
		setGame(gameCopy);
		return result; // null if the move was illegal, the move object if the move was legal
	};

	const getRandomGame = () => {
		let id = Math.floor(Math.random() * 119850) + 1;
		let gameById = getGameById(listOfGames, id);
		let movesArray = getPgnArray(gameById);
		console.log(gameById);
		console.log(movesArray);
		setMoves(movesArray);
	};

	const reset = () => {
		game.reset();
		setGame(game);
	};

	const previousMove = () => {
		game.undo();
		setGame(game);
		setCount(count - 1);
	};
	const nextMove = () => {
		makeAMove(moves[count]);
		setCount(count + 1);
	};

	return (
		<div className="background">
			<Header />
			<div className="gteBody">
				<div className="gteBoard">
					<Chessboard
						position={game.fen()}
						boardWidth={600}
						animationDuration={200}
					/>
					<button onClick={getRandomGame}>Get game</button>
					<button onClick={reset}>Reset</button>
					<button onClick={previousMove}>Previous Move</button>
					<button onClick={nextMove}>Next Move</button>
				</div>
				<Guess />
			</div>
		</div>
	);
};
