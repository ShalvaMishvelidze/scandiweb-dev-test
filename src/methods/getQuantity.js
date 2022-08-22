export const getQuantity = (cart) => {
	return cart.reduce((acc, item) => {
		return acc + item.count;
	}, 0);
};
