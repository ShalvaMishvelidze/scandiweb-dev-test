export const setSelectedAttributes = (id, value, self) => {
	const repetition = self.state.cartAttributes.some((item) => {
		return item.id === id;
	});
	const selectedItemIndex = self.state.cartAttributes.findIndex((item) => {
		return item.id === id;
	});

	if (repetition) {
		self.setState((prevState) => ({
			cartAttributes: prevState.cartAttributes.map((attribute, index) => {
				return index === selectedItemIndex
					? {
							...attribute,
							value: value,
					  }
					: attribute;
			}),
		}));
	} else {
		function compare(a, b) {
			if (a.value < b.value) {
				return -1;
			}
			if (a.value > b.value) {
				return 1;
			}
			return 0;
		}
		self.setState({
			cartAttributes: [
				...self.state.cartAttributes,
				{
					id: id,
					value: value,
				},
			].sort(compare),
		});
	}
};
