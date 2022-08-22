import { removeBorder } from './removeBorder';

export const hoverEnd = (e, self) => {
	removeBorder(e);
	self.setState({
		showAddToCart: false,
	});
};
