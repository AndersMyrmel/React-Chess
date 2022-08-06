//Parse result data from lozza engine to four digit string
export const getLastDigits = (str) => {
	return str.split('bestmove')[1].trim();
};
