export const setColor = (e, id, self) => {
	const atts = Array.from(document.querySelectorAll('.color-wrapper'));
	atts.forEach((att) => {
		att.classList.remove('wrapper-border');
	});
	e.currentTarget.classList.add('wrapper-border');
	self.setState({
		color: id,
	});
};
