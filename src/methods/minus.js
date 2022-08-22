import { decreaseCount } from './decreaseCount';
import { removeFromCart } from './removeFromCart';

export const minus = (item, index, app, count) => {
	decreaseCount(item, index, app);
	if (count - 1 === 0) {
		removeFromCart(index, app);
	}
};
