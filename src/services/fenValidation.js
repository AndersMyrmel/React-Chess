// Match string to regular expression to validate wheter the given string is a valid FEN notation
export const validateFen = (str) => {
	const pattern =
		'\\s*([rnbqkpRNBQKP1-8]+\\/){7}([rnbqkpRNBQKP1-8]+)\\s[bw-]\\s(([a-hkqA-HKQ]{1,4})|(-))\\s(([a-h][36])|(-))\\s\\d+\\s\\d+\\s*';
	const validate = new RegExp(pattern);
	return validate.test(str);
};
