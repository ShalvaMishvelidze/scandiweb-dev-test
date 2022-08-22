export const hasColorAtt = (attributes) => {
	return attributes.some((attribute) => {
		return attribute.type === 'swatch';
	});
};
