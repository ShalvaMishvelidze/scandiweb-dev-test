import React, { Component } from 'react';

export default class Cart extends Component {
	render() {
		const cart = this.props.cart;
		const currency = this.props.currency;
		const increaseCount = this.props.increaseCount;
		const decreaseCount = this.props.decreaseCount;
		const removeFromCart = this.props.removeFromCart;

		const total = cart.reduce((acc, item) => {
			return acc + item.prices[currency].amount * item.count;
		}, 0);
		const quantity = cart.reduce((acc, item) => {
			return acc + item.count;
		}, 0);

		return (
			<div className="cart">
				<p className="cart-title">cart</p>
				<div className="underline"></div>
				<div className="cart-items">
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
								<div className="cart-items-container">
									<div className="item-left">
										<h1 className="cart-item-title">
											{brand} {name}
										</h1>
										<p className="price">
											{prices[currency].amount}
											{prices[currency].currency.symbol}
										</p>
										{attributes.map((attribute) => {
											const { id, name, type, items } = attribute;
											return (
												<div
													key={id}
													className="attribute-container"
												>
													<h1>{name}:</h1>
													<div className="items-container">
														{type === 'swatch' &&
															items.map((item) => {
																const { value, id } = item;
																return (
																	<div
																		key={id}
																		className={
																			id === color
																				? 'color-wrapper wrapper-border'
																				: 'color-wrapper'
																		}
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
																					? 'text-att-container text-att-active'
																					: 'text-att-container'
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
									<div className="item-right">
										<div className="count-container">
											<button
												className="count-btn"
												onClick={() => increaseCount(item, index)}
											>
												<div className="count-btn-box">
													<span>+</span>
												</div>
											</button>
											<p className="count">{count}</p>
											<button
												className="count-btn"
												onClick={() => {
													decreaseCount(item, index);
													if (count - 1 === 0) {
														removeFromCart(index);
													}
												}}
											>
												<div className="count-btn-box">
													<span>-</span>
												</div>
											</button>
										</div>
										<div className="cart-item-image">
											<img src={gallery[0]} alt={name} />
										</div>
									</div>
								</div>
								<div className="underline"></div>
							</section>
						);
					})}
				</div>
				{cart[0] && (
					<div className="cart-total">
						<p>
							tax 21%:{' '}
							<span>
								{cart[0].prices[currency].currency.symbol}
								{parseFloat((total / 100) * 21).toFixed(2)}
							</span>
						</p>
						<p>
							quantity: <span>{quantity}</span>
						</p>
						<p>
							total:{' '}
							<span>
								{cart[0].prices[currency].currency.symbol}
								{parseFloat(total).toFixed(2)}
							</span>
						</p>
						<button
							className="order-btn"
							onClick={() => {
								alert('Order Completed');
							}}
						>
							order
						</button>
					</div>
				)}
			</div>
		);
	}
}
