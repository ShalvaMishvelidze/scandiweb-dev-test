export const setAttribute = (e, attribute) => {
	const textAtts = Array.from(
		e.currentTarget.querySelectorAll('.text-att-container')
	);
	if (
		e.target.classList.contains('text-att-container') &&
		textAtts.some((att) => {
			return att.classList.contains('text-att-active');
		})
	) {
		textAtts.forEach((att) => {
			return att.classList.remove('text-att-active');
		});
	}
	if (e.target.classList.contains('text-att-container')) {
		e.target.classList.add('text-att-active');
	}
};
