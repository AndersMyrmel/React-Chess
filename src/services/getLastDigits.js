// Parse result data from lozza engine to array containing two strings, example: ['f3', 'f7']
export const getLastDigits = (str) => {
	return str
		.split('bestmove')[1]
		.trim()
		.match(/.{1,2}/g);
};
