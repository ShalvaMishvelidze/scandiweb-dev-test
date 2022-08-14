export const increaseCount = (item, itemIndex, app) => {
	app.setState((prevState) => ({
		cart: prevState.cart.map((cartItem) => {
			return cartItem.name === item.name &&
				cartItem.id === item.id &&
				cartItem.color === item.color &&
				JSON.stringify(cartItem.selectedAttributes) ===
					JSON.stringify(item.selectedAttributes)
				? { ...cartItem, count: app.state.cart[itemIndex].count + 1 }
				: cartItem;
		}),
	}));
};
