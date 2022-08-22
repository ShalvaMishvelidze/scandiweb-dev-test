export const setDropdown = (self) => {
	if (self.state.dropdown) {
		self.setState({
			dropdown: false,
		});
	} else {
		self.setState({
			dropdown: true,
		});
	}
};
