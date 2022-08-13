import React, { Component } from 'react';
import ImageContainer from './ImageContainer';
import SwatchAttribute from './SwatchAttribute';
import TextAttribute from './TextAttribute';
import { Markup } from 'interweave';
import { addToCart } from './methods/addToCart';
import { setSelectedAttributes } from './methods/setSelectedAttributes';
import { setAttribute } from './methods/setAttribute';
import { setColor } from './methods/setColor';

export default class product extends Component {
	constructor(props) {
		super(props);
		this.state = {
			image: 0,
			cartAttributes: [],
			color: '',
		};
	}

	render() {
		const product = this.props.product;
		const currency = this.props.currency;
		const setCart = this.props.setCart;
		const app = this.props.app;

		const self = this;

		let cartProduct = {
			name: product?.name,
			id: product?.id,
			gallery: product?.gallery,
			attributes: product?.attributes,
			prices: product?.prices,
			brand: product?.brand,
			count: 1,
			selectedAttributes: this.state.cartAttributes,
			color: this.state.color,
		};

		return (
			<>
				{product && (
					<div className="product">
						<ImageContainer product={product} self={self} />
						<img
							className="product-image"
							src={product.gallery[this.state.image]}
							alt={product.name}
						/>
						<div className="product-content">
							<h1 className="product-name">
								<span>{product.brand}</span> {product.name}
							</h1>
							{product?.attributes &&
								product.attributes.map((attribute) => {
									const { id, name, type, items } = attribute;
									return (
										<div key={id} className="attribute-container">
											<h1 className="product-att-name">{name}:</h1>
											<div
												className="items-container"
												onClick={(e) => setAttribute(e)}
											>
												{type === 'swatch' && (
													<SwatchAttribute
														items={items}
														setColor={setColor}
														self={self}
													/>
												)}
												{type !== 'swatch' && (
													<TextAttribute
														items={items}
														setSelectedAttributes={
															setSelectedAttributes
														}
														self={self}
														id={id}
													/>
												)}
											</div>
										</div>
									);
								})}
							<h1 className="product-price">Price:</h1>
							<h1 className="product-price-value">
								{product.prices[currency].amount}
								{product.prices[currency].currency.symbol}
							</h1>
							<button
								className="cart-btn"
								onClick={() =>
									addToCart(product, setCart, cartProduct, self, app)
								}
							>
								add to cart
							</button>
							<div className="description">
								<Markup content={product.description} />
							</div>
						</div>
					</div>
				)}
			</>
		);
	}
}
