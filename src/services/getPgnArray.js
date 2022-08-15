export const getPgnArray = (game) => {
	let PGN = game.substring(game.indexOf('1.'));
	let moves = PGN.split(' ').filter((x) => isNaN(x));
	return moves;
};
