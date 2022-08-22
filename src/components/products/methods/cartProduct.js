import { cartDefaultAttValues } from './cartDefaultAttValues';
import { colorAttIndex } from './colorAttIndex';
import { compare } from './compare';
import { hasColorAtt } from './hasColorAtt';
import { textAtts } from './textAtts';

export const cartProduct = ({
	id,
	gallery,
	name,
	prices,
	attributes,
	brand,
}) => {
	const defaultAttValues = cartDefaultAttValues(textAtts(attributes));

	let product = {
		name: name,
		id: id,
		gallery: gallery,
		attributes: attributes,
		prices: prices,
		brand: brand,
		count: 1,
		selectedAttributes:
			textAtts(attributes)?.length !== 0
				? defaultAttValues.sort(compare)
				: [],
		color: hasColorAtt(attributes)
			? attributes[colorAttIndex(attributes)]?.items[0].id
			: '',
	};

	return product;
};
