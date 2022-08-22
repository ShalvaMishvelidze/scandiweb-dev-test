export const total = (cart, currency) => {
	return cart.reduce((acc, item) => {
		return acc + item.prices[currency].amount * item.count;
	}, 0);
};
