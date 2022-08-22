import { addBorder } from './addBorder';

export const hoverStart = (e, self) => {
	addBorder(e);
	self.setState({
		showAddToCart: true,
	});
};
