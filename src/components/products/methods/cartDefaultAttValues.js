export const cartDefaultAttValues = (textAtts) => {
	const defaultAttValues = [];

	for (let index = 0; index < textAtts.length; index++) {
		const element = {
			id: textAtts[index].id,
			value: textAtts[index].items[0].value,
		};
		defaultAttValues.push(element);
	}

	return defaultAttValues;
};
