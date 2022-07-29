import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CartOverlay extends Component {
	render() {
		const cart = this.props.cart;
		const currency = this.props.currency;

		const total = cart.reduce((acc, item) => {
			return acc + item.prices[currency].amount * item.count;
		}, 0);
		const quantity = cart.reduce((acc, item) => {
			return acc + item.count;
		}, 0);

		return (
			<div>
				<p className="cart-overlay-title">
					<span>My Bag:</span> {quantity} items
				</p>
				<div className="cart-overlay-items">
					{cart.map((item, index) => {
						const {
							name,
							gallery,
							attributes,
							prices,
							brand,
							count,
							color,
							selectedAttributes,
						} = item;
						return (
							<section key={index}>
								<div className="cart-overlay-items-container">
									<div className="overlay-item-left">
										<h1 className="cart-overlay-item-title">
											{brand} {name}
										</h1>
										<p className="overlay-price">
											{prices[currency].amount}
											{prices[currency].currency.symbol}
										</p>
										{attributes.map((attribute) => {
											const { id, name, type, items } = attribute;
											return (
												<div
													key={id}
													className="overlay-attribute-container"
												>
													<h1 className="overlay-att-name">
														{name}:
													</h1>
													<div className="overlay-items-container">
														{type === 'swatch' &&
															items.map((item) => {
																const { value, id } = item;
																return (
																	<div
																		key={id}
																		className={
																			id === color
																				? 'overlay-color-wrapper overlay-wrapper-border'
																				: 'overlay-color-wrapper'
																		}
																	>
																		<div
																			className="overlay-color-container"
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
																const selectedAttribute =
																	selectedAttributes.some(
																		(element) => {
																			return (
																				element.id === id &&
																				element.value ===
																					value
																			);
																		}
																	);
																return (
																	<div key={value}>
																		<div
																			className={
																				selectedAttribute
																					? 'overlay-text-att-container overlay-text-att-active'
																					: 'overlay-text-att-container'
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
									</div>
									<div className="overlay-item-right">
										<div className="overlay-count-container">
											<button className="overlay-plus-btn">
												<div className="overlay-plus-btn-box">
													<span>+</span>
												</div>
											</button>
											<p className="overlay-count">{count}</p>
											<button className="overlay-minus-btn">
												<div className="overlay-minus-btn-box">
													<span>-</span>
												</div>
											</button>
										</div>
										<div className="overlay-item-image">
											<img src={gallery[0]} alt={name} />
										</div>
									</div>
								</div>
							</section>
						);
					})}
				</div>
				{cart[0] && (
					<div className="overlay-footer">
						<div className="overlay-total">
							<span>total: </span>
							<span>
								{cart[0].prices[currency].currency.symbol}
								{parseFloat(total).toFixed(2)}
							</span>
						</div>
						<div className="overlay-btn-container">
							<Link to={'/cart'}>
								<button className="view-bag-btn">view bag</button>
							</Link>
							<button
								className="check-out-btn"
								onClick={() => {
									alert('Order Complete');
								}}
							>
								check out
							</button>
						</div>
					</div>
				)}
			</div>
		);
	}
}
