export const increaseCount = (item, itemIndex, app) => {
	app.setState((prevState) => ({
		cart: prevState.cart.map((cartItem) => {
			return cartItem.name === item.name
				? { ...cartItem, count: app.state.cart[itemIndex].count + 1 }
				: cartItem;
		}),
	}));
};
