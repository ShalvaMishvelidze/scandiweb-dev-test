import React, { Component } from 'react';
import { cartDefaultAttValues } from './methods/cartDefaultAttValues';
import { compare } from './methods/compare';

export default class AddToCart extends Component {
	render() {
		const product = this.props.product;
		const setCart = this.props.setCart;
		const app = this.props.app;

		const { id, gallery, name, prices, attributes, brand } = product;

		const hasColorAtt = attributes.some((attribute) => {
			return attribute.type === 'swatch';
		});
		const colorAttIndex = attributes.findIndex((attribute) => {
			return attribute.type === 'swatch';
		});
		const textAtts = attributes.filter((attribute) => {
			return attribute.type !== 'swatch';
		});
		const defaultAttValues = cartDefaultAttValues(textAtts);

		let cartProduct = {
			name: name,
			id: id,
			gallery: gallery,
			attributes: attributes,
			prices: prices,
			brand: brand,
			count: 1,
			selectedAttributes:
				textAtts.length !== 0 ? defaultAttValues.sort(compare) : [],
			color: hasColorAtt ? attributes[colorAttIndex].items[0].id : '',
		};

		return (
			<div className="add-to-cart" onClick={() => setCart(cartProduct, app)}>
				<div className="cart-icon-container">
					<img
						src="./images/cart-light.png"
						alt="cart"
						className="cart-icon"
					/>
				</div>
				<div className="cart-wheels-container">
					<img
						src="./images/cart-wheel-light.png"
						alt="cart-wheel"
						className="cart-wheel-left"
					/>
					<img
						src="./images/cart-wheel-light.png"
						alt="cart-wheel"
						className="cart-wheel-right"
					/>
				</div>
			</div>
		);
	}
}
