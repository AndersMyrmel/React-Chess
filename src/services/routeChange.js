// Redirect to given string
export const routeChange = (nav, str) => {
	let path = str;
	nav(path);
};
