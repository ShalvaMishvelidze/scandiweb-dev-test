export const selectedAttribute = (selectedAttributes, id, value) => {
	return selectedAttributes.some((element) => {
		return element.id === id && element.value === value;
	});
};
