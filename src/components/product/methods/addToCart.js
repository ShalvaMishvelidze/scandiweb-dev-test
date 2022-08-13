export const addToCart = (product, setCart, cartProduct, self, app) => {
	const hasColorAtt = product?.attributes?.some((item) => {
		return item.type === 'swatch';
	});
	const colorValueIsSelected = self.state.color;

	const colorIsSelected = hasColorAtt && colorValueIsSelected;
	const textAttArr = product?.attributes?.filter((att) => {
		return att.type !== 'swatch';
	});
	const textAttNotSelected =
		self.state.cartAttributes.length !== textAttArr.length;
	if (hasColorAtt) {
		if (textAttNotSelected || !colorIsSelected) {
			alert('select all items');
		} else {
			setCart(cartProduct, app);
		}
	} else if (textAttNotSelected) {
		alert('select all items');
	} else {
		setCart(cartProduct, app);
	}
};
