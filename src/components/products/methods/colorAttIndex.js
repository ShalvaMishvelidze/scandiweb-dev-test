export const colorAttIndex = (attributes) => {
	return attributes.findIndex((attribute) => {
		return attribute.type === 'swatch';
	});
};
