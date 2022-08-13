export const setColor = (e, id, self) => {
	const atts = Array.from(document.querySelectorAll('.color-container'));
	atts.forEach((att) => {
		att.classList.remove('selected-color');
	});
	e.currentTarget.classList.add('selected-color');
	self.setState({
		color: id,
	});
};
