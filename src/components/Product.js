import React, { Component } from 'react';
import { Markup } from 'interweave';

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
		const currency = this.props.currency;
		const setCart = this.props.setCart;

		const product = this.props.product;
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

		const setColor = (e, id) => {
			const atts = Array.from(document.querySelectorAll('.color-wrapper'));
			atts.forEach((att) => {
				att.classList.remove('wrapper-border');
			});
			e.currentTarget.classList.add('wrapper-border');
			this.setState({
				color: id,
			});
		};

		const setSelectedAttributes = (id, value) => {
			const repetition = this.state.cartAttributes.some((item) => {
				return item.id === id;
			});
			const selectedItemIndex = this.state.cartAttributes.findIndex(
				(item) => {
					return item.id === id;
				}
			);

			if (repetition) {
				this.setState((prevState) => ({
					cartAttributes: prevState.cartAttributes.map(
						(attribute, index) => {
							return index === selectedItemIndex
								? {
										...attribute,
										value: value,
								  }
								: attribute;
						}
					),
				}));
			} else {
				function compare(a, b) {
					if (a.value < b.value) {
						return -1;
					}
					if (a.value > b.value) {
						return 1;
					}
					return 0;
				}
				this.setState({
					cartAttributes: [
						...this.state.cartAttributes,
						{
							id: id,
							value: value,
						},
					].sort(compare),
				});
			}
		};

		const setAttribute = (e) => {
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

		const addToCart = () => {
			const hasColorAtt = product?.attributes?.some((item) => {
				return item.type === 'swatch';
			});
			const colorValueIsSelected = this.state.color;

			const colorIsSelected = hasColorAtt && colorValueIsSelected;
			const textAttArr = product?.attributes?.filter((att) => {
				return att.type !== 'swatch';
			});
			const textAttNotSelected =
				this.state.cartAttributes.length !== textAttArr.length;
			if (hasColorAtt) {
				if (textAttNotSelected || !colorIsSelected) {
					alert('select all items');
				} else {
					setCart(cartProduct);
				}
			} else if (textAttNotSelected) {
				alert('select all items');
			} else {
				setCart(cartProduct);
			}
		};

		return (
			<>
				{product && (
					<div className="product">
						<div className="image-container">
							{product.gallery.map((image, index) => {
								return (
									<button
										key={index}
										className="img-btn"
										onClick={() => {
											this.setState({
												image: index,
											});
										}}
									>
										<img key={image} src={image} alt={product.name} />
									</button>
								);
							})}
						</div>
						<img
							className="product-image"
							src={product.gallery[this.state.image]}
							alt={product.name}
						/>
						<div className="product-content">
							<h1>
								{product.brand} {product.name}
							</h1>
							{product?.attributes &&
								product.attributes.map((attribute) => {
									const { id, name, type, items } = attribute;
									return (
										<div key={id} className="attribute-container">
											<h1>{name}:</h1>
											<div
												className="items-container"
												onClick={(e) => setAttribute(e)}
											>
												{type === 'swatch' &&
													items.map((item) => {
														const { value, id } = item;
														return (
															<div
																key={id}
																className="color-wrapper"
																onClick={(e) => setColor(e, id)}
															>
																<div
																	className="color-container"
																	style={{
																		backgroundColor: `${value}`,
																	}}
																></div>
															</div>
														);
													})}
												{type !== 'swatch' &&
													items.map((item) => {
														const { value } = item;
														return (
															<div key={value}>
																<div
																	className="text-att-container"
																	onClick={() =>
																		setSelectedAttributes(
																			id,
																			value
																		)
																	}
																>
																	{value}
																</div>
															</div>
														);
													})}
											</div>
										</div>
									);
								})}
							<h1>Price:</h1>
							<h1>
								{product.prices[currency].amount}
								{product.prices[currency].currency.symbol}
							</h1>
							<button className="cart-btn" onClick={() => addToCart()}>
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
