export const setCartDropdown = (self) => {
	if (self.state.cartDropdown) {
		self.setState({
			cartDropdown: false,
		});
	} else {
		self.setState({
			cartDropdown: true,
		});
	}
};
