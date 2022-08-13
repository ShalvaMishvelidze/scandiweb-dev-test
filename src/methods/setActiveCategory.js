export const setActiveCategory = (e) => {
	const categoryLinks = Array.from(document.querySelectorAll('.link'));
	if (
		categoryLinks.some((att) => {
			return att.classList.contains('active');
		})
	) {
		categoryLinks.forEach((att) => {
			return att.classList.remove('active');
		});
	}
	e.target.classList.add('active');
};
