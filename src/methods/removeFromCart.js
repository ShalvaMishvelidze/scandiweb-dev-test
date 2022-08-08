export const removeFromCart = (itemIndex, app) => {
	app.state.cart.splice(itemIndex, 1);
};
