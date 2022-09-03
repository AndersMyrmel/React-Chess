import React from 'react';
import '../Styles/Guess.css';

export const Guess = () => {
	return (
		<div className="guessBody">
			<h1>Guess the ELO</h1>
			<h2>
				Shown is a rated game played on Lichess from 2014. Guess the ELO rating
				of the player with the white pieces.
			</h2>
			<form>
				<label id="eloLabel">
					ELO (0-3000):
					<input type="number" name="ELO" id="eloInput" input max={3000} />
				</label>
				<input type="submit" value="Submit" id="eloInputButton" />
			</form>
		</div>
	);
};
