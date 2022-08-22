export const cartProduct = (product, self) => {
	let cartProduct = {
		name: product?.name,
		id: product?.id,
		gallery: product?.gallery,
		attributes: product?.attributes,
		prices: product?.prices,
		brand: product?.brand,
		count: 1,
		selectedAttributes: self.state.cartAttributes,
		color: self.state.color,
	};

	return cartProduct;
};
