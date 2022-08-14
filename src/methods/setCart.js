export const setCart = (item, app) => {
	const checkItemInCart = app.state.cart.some((element) => {
		return (
			element.id === item.id &&
			element.color === item.color &&
			JSON.stringify(element.selectedAttributes) ===
				JSON.stringify(item.selectedAttributes)
		);
	});
	const itemIndex = app.state.cart.findIndex((cartItem) => {
		return (
			cartItem.id === item.id &&
			cartItem.color === item.color &&
			JSON.stringify(cartItem.selectedAttributes) ===
				JSON.stringify(item.selectedAttributes)
		);
	});
	if (!checkItemInCart) {
		app.setState({
			cart: [...app.state.cart, item],
		});
	} else {
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
	}
};
