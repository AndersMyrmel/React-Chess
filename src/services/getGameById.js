export const getGameById = (str, id) => {
	return str.substring(
		str.indexOf('[ID ' + id.toString() + ']'),
		str.lastIndexOf('[ID ' + (id + 1).toString() + ']')
	);
};
