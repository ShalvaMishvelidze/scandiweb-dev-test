export const setCurrencies = (self, setCurrency, index, app) => {
	setCurrency(index, app);
	self.setState({
		dropdown: false,
	});
};
