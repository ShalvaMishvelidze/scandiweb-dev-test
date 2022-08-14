export const activeAtt = (cartAttributes, id, value) => {
	return cartAttributes.findIndex(
		(element) => element.id === id && element.value === value
	);
};
