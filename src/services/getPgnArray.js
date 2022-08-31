// Parse random chess game from database to array in portable game notation format
export const getPgnArray = (game) => {
	let PGN = game.substring(game.indexOf('1.'));
	let moves = PGN.split(' ').filter((x) => isNaN(x));
	return moves;
};
