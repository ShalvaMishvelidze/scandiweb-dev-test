export const setDropdownFalse = (self) => {
	if (self.state.dropdown) {
		self.setState({
			dropdown: false,
		});
	}
};
