import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Products extends Component {
	render() {
		const categories = this.props.categories;
		const currency = this.props.currency;
		const category = this.props.category;
		const setCart = this.props.setCart;

		return (
			<>
				<p className="category-name">
					{categories && categories[category].name}
				</p>
				<div className="container">
					{categories &&
						categories[category].products.map((product, index) => {
							const {
								id,
								gallery,
								name,
								prices,
								attributes,
								brand,
								inStock,
							} = product;

							const hasColorAtt = attributes.some((attribute) => {
								return attribute.type === 'swatch';
							});
							const colorAttIndex = attributes.findIndex((attribute) => {
								return attribute.type === 'swatch';
							});
							const textAtts = attributes.filter((attribute) => {
								return attribute.type !== 'swatch';
							});
							const defaultAttValues = [];
							for (let index = 0; index < textAtts.length; index++) {
								const element = {
									id: textAtts[index].id,
									value: textAtts[index].items[0].value,
								};
								defaultAttValues.push(element);
							}

							function compare(a, b) {
								if (a.value < b.value) {
									return -1;
								}
								if (a.value > b.value) {
									return 1;
								}
								return 0;
							}

							let cartProduct = {
								name: name,
								id: id,
								gallery: gallery,
								attributes: attributes,
								prices: prices,
								brand: brand,
								count: 1,
								selectedAttributes:
									textAtts.length !== 0
										? defaultAttValues.sort(compare)
										: [],
								color: hasColorAtt
									? attributes[colorAttIndex].items[0].id
									: '',
							};
							return (
								<div
									className={
										!inStock
											? 'products out-of-stock-products'
											: 'products'
									}
									key={id}
									onMouseEnter={(e) => {
										e.currentTarget.classList.add('products-hover');
										const addToCart = Array.from(
											document.querySelectorAll('.add-to-cart')
										);
										addToCart[index].classList.add(
											inStock ? 'display-add-to-cart' : 'add-to-cart'
										);
									}}
									onMouseLeave={(e) => {
										e.currentTarget.classList.remove(
											'products-hover'
										);
										const addToCart = Array.from(
											document.querySelectorAll('.add-to-cart')
										);
										addToCart[index].classList.remove(
											'display-add-to-cart'
										);
									}}
								>
									<Link to={`/products/${id}`}>
										<img src={gallery[0]} alt={name} />
										<div>
											<p className="name">{name}</p>
											<p className="price">
												{prices[currency].amount}
												{prices[currency].currency.symbol}
											</p>
										</div>
									</Link>
									<div
										className="add-to-cart"
										onClick={() => setCart(cartProduct)}
									>
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
									<div
										className={
											!inStock
												? 'out-of-stock display-out-of-stock'
												: 'out-of-stock'
										}
									>
										out of stock
									</div>
								</div>
							);
						})}
				</div>
			</>
		);
	}
}
