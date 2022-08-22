export const textAtts = (attributes) => {
	return attributes.filter((attribute) => {
		return attribute.type !== 'swatch';
	});
};
